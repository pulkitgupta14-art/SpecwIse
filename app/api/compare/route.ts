import { NextResponse } from 'next/server'
import { comparePhones } from '@/lib/recommendation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const ids = searchParams.get('ids')

  if (!ids) {
    return NextResponse.json(
      { error: 'No phone IDs provided' },
      { status: 400 }
    )
  }

  const phoneIds = ids.split(',')
  const phones = await comparePhones(phoneIds)

  if (phones.length === 0) {
    return NextResponse.json(
      { error: 'No phones found for comparison' },
      { status: 404 }
    )
  }

  return NextResponse.json({ phones })
}
