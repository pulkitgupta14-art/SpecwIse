import { Smartphone, Github, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer id="about" className="border-t border-border bg-muted/20 py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* About Section */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5 text-foreground">
              <div className="rounded-lg bg-primary p-1.5">
                <Smartphone className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl tracking-tight">SpecWise</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
              A high-performance smartphone recommendation engine. We analyze hardware specs, reviews, and real-world performance to bring you hyper-personalized suggestions.
            </p>
            <p className="text-sm font-medium text-foreground/80 mt-2">
              Developed by Pulkit Gupta
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-semibold text-foreground">Tech Stack</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Next.js (App Router)
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Tailwind CSS & Shadcn UI
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Prisma ORM & SQLite
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                AI-Powered Data Sync
              </li>
            </ul>
          </div>

          {/* Links & CTA */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-semibold text-foreground">Project Links</h3>
            <div className="flex flex-col gap-3 w-full sm:w-auto mt-1">
              <a 
                href="https://github.com/pulkitgupta14-art/SpecWise" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                <Github className="h-4 w-4" />
                View Source on GitHub
              </a>
              <a 
                href="https://specwise-orpin.vercel.app" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow h-9 px-4 py-2"
              >
                <Globe className="h-4 w-4" />
                Live Vercel Deployment
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-border/50 pt-8 flex flex-col items-center justify-center gap-2 text-center text-xs text-muted-foreground/60">
          <p>SpecWise - Portfolio Project © {new Date().getFullYear()}</p>
          <p>Data updated regularly. Prices may vary by region and retailer.</p>
        </div>
      </div>
    </footer>
  )
}
