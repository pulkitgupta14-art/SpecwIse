import { NextResponse } from 'next/server'
import { getAllPhones, getPhoneById } from '@/lib/recommendation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (id) {
    const phone = await getPhoneById(id)
    if (!phone) {
      return NextResponse.json(
        { error: 'Phone not found' },
        { status: 404 }
      )
    }
    return NextResponse.json({ phone })
  }

  const phones = await getAllPhones()
  return NextResponse.json({ phones })
}
