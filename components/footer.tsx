import { Smartphone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2.5 text-foreground">
            <div className="rounded-lg bg-foreground p-1.5">
              <Smartphone className="h-4 w-4 text-background" />
            </div>
            <span className="font-semibold text-lg">SpecWise</span>
          </div>
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
            Your smart assistant for finding the perfect smartphone. We analyze specs, reviews, and real-world performance to give you personalized recommendations.
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-muted-foreground">
              Data updated regularly. Prices may vary by region and retailer.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with Next.js and AI-powered recommendation engine.
            </p>
            <p className="text-xs text-muted-foreground/60">
              developed by pulkit gupta
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
