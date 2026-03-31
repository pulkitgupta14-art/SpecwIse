import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpecWise - Choose Smart. Not Just Specs.',
  description:
    'SpecWise helps you choose a smartphone that fits how you actually use your phone — balanced against your budget — with clear insights beyond the spec sheet.',
  applicationName: 'SpecWise',
  keywords: [
    'SpecWise',
    'smartphone',
    'phone recommendations',
    'compare phones',
    'buy phone',
  ],
  openGraph: {
    title: 'SpecWise - Choose Smart. Not Just Specs.',
    description:
      'Smart smartphone picks for your budget and lifestyle — not just raw specs.',
    siteName: 'SpecWise',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpecWise - Choose Smart. Not Just Specs.',
    description:
      'Smart smartphone picks for your budget and lifestyle — not just raw specs.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.className} font-sans antialiased`}>
        <SiteHeader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
