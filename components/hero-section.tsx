'use client'

import { Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="specwise-hero relative overflow-hidden py-20 md:py-28 lg:py-36">
      {/* Ambient accents */}
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-sky-500/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-600/12 blur-[90px]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.12),transparent_55%)]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="specwise-hero-animate mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/85 shadow-sm backdrop-blur-sm"
            style={{ animationDelay: '0ms' }}
          >
            <Sparkles className="h-4 w-4 text-sky-400" aria-hidden />
            <span className="font-medium tracking-wide">SpecWise</span>
            <span className="text-white/40">·</span>
            <span className="text-white/70">Smart recommendations</span>
          </div>

          <h1
            className="specwise-hero-animate mb-6 text-4xl font-bold tracking-tight text-balance text-white md:text-5xl lg:text-6xl lg:leading-[1.08]"
            style={{ animationDelay: '90ms' }}
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text">
              Spec
            </span>
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Wise
            </span>
          </h1>

          <p
            className="specwise-hero-animate mx-auto max-w-xl text-lg font-medium text-sky-100/90 md:text-xl"
            style={{ animationDelay: '180ms' }}
          >
            Choose Smart. Not Just Specs.
          </p>

          <p
            className="specwise-hero-animate mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pretty text-white/55 md:text-lg"
            style={{ animationDelay: '260ms' }}
          >
            Tell us your budget and how you use your phone. We balance real-world
            fit — performance, camera, battery, and longevity — so you pick with
            confidence.
          </p>
        </div>
      </div>
    </section>
  )
}
