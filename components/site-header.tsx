import fs from 'node:fs'
import path from 'node:path'
import { SiteHeaderLogo } from '@/components/site-header-logo'

export function SiteHeader() {
  const logoPath = path.join(process.cwd(), 'public', 'logo.png')
  const hasLogo = fs.existsSync(logoPath)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4 md:h-16 md:px-6">
        <SiteHeaderLogo hasLogo={hasLogo} />
      </div>
    </header>
  )
}
