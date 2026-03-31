'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function TextLogo({ className }: { className?: string }) {
  return (
    <span
      className={`text-lg font-bold tracking-tight md:text-xl ${className ?? ''}`}
    >
      <span className="text-foreground">Spec</span>
      <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
        Wise
      </span>
    </span>
  )
}

export function SiteHeaderLogo({ hasLogo }: { hasLogo: boolean }) {
  const [useText, setUseText] = useState(!hasLogo)

  return (
    <Link
      href="/"
      className="group flex items-center gap-2 outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-sky-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
    >
      {!useText ? (
        <Image
          src="/logo.png"
          alt="SpecWise"
          width={160}
          height={40}
          className="h-8 w-auto object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
          priority
          onError={() => setUseText(true)}
        />
      ) : (
        <TextLogo className="transition-transform duration-300 group-hover:scale-[1.02]" />
      )}
    </Link>
  )
}
