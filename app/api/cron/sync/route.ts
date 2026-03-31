import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

// This cron job will run daily to fetch and update smartphone data.
export async function GET(request: Request) {
  try {
    // 1. Authenticate the Cron Job
    // Vercel auto-sends the CRON_SECRET header to prevent public abuse.
    const authHeader = request.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // 2. Setup the external API request
    const apiKey = process.env.EXTERNAL_PHONE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'EXTERNAL_PHONE_API_KEY is not configured in .env' }, { status: 500 });
    }

    const API_ENDPOINT = 'https://mobile-devices-api1.p.rapidapi.com/devices?page=1&pageSize=30';

    const response = await fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'mobile-devices-api1.p.rapidapi.com'
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from external API. Status: ${response.status}`);
    }

    const json = await response.json();
    const phonesData = json.items || [];

    // 3. Sync data with the Database
    let syncedCount = 0;

    for (const item of phonesData) {
      // Basic extraction from mobile-devices-api1
      const brandName = item.brand?.name || 'Unknown';
      const chipset = item.platform?.chipset || 'Unknown Processor';
      const yearStr = item.launch?.announced || '';
      const yearMatch = yearStr.match(/\d{4}/);
      const year = yearMatch ? parseInt(yearMatch[0]) : new Date().getFullYear();

      await prisma.phone.upsert({
        where: { id: String(item.id) },
        update: {},
        create: {
          id: String(item.id),
          name: String(item.name || 'Unknown'),
          brand: brandName,
          price: 500, // Default price since API doesn't guarantee it
          processor: chipset,
          cameraScore: 80, // Default scores since this API doesn't provide subjective metrics
          batteryScore: 85,
          performanceScore: 80,
          heatingIssue: false,
          longTermScore: 80,
          pros: JSON.stringify([]),
          cons: JSON.stringify([]),
          imageUrl: '',
          backImageUrl: null,
          releaseYear: year,
          updateYears: 3,
        },
      });
      syncedCount++;
    }

    return NextResponse.json({ 
      success: true, 
      message: `Successfully synced ${syncedCount} phones from external API.` 
    });

  } catch (error: any) {
    console.error('Error syncing phones during cron job:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
