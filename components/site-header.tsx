import fs from 'node:fs'
import path from 'node:path'
import Link from 'next/link'
import { SiteHeaderLogo } from '@/components/site-header-logo'

export function SiteHeader() {
  const logoPath = path.join(process.cwd(), 'public', 'logo.png')
  const hasLogo = fs.existsSync(logoPath)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:h-16 md:px-6">
        <SiteHeaderLogo hasLogo={hasLogo} />
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary text-foreground/80">Home</Link>
          <Link href="#search-form" className="transition-colors hover:text-primary text-foreground/80">Compare</Link>
          <Link href="#about" className="transition-colors hover:text-primary text-foreground/80">About</Link>
        </nav>
      </div>
    </header>
  )
}
