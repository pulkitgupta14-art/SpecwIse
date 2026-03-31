import { NextResponse } from 'next/server'
import { getRecommendations } from '@/lib/recommendation'
import type { UsageType } from '@/lib/types'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { budget, usageTypes } = body as { budget: number; usageTypes: UsageType[] }

    if (!budget || budget < 0) {
      return NextResponse.json(
        { error: 'Invalid budget provided' },
        { status: 400 }
      )
    }

    const recommendations = await getRecommendations(budget, usageTypes || [])
    
    return NextResponse.json({ recommendations })
  } catch {
    return NextResponse.json(
      { error: 'Failed to process recommendation request' },
      { status: 500 }
    )
  }
}
