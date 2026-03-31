'use client'

import { Phone } from '@/lib/types'
import { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, X, Smartphone } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

interface ComparisonPanelProps {
  phones: Phone[]
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function ComparisonPanel({ phones }: ComparisonPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (phones.length >= 2 && panelRef.current) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
    }
  }, [phones.length])

  if (phones.length === 0) return null

  return (
    <Card ref={panelRef} className="mb-12 border-primary/20 bg-background/50 shadow-md">
      <CardHeader className="border-b bg-muted/20 pb-4">
        <div className="flex items-center gap-2">
          <Smartphone className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl">Comparison Panel</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phones.map((phone) => (
            <div key={phone.id} className="flex flex-col gap-4 rounded-xl border p-4 bg-card shadow-sm hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground">{phone.brand}</span>
                <span className="text-lg font-bold leading-tight">{phone.name}</span>
                <span className="text-xl font-extrabold text-foreground mt-1">
                  {formatPrice(phone.price)}
                </span>
              </div>
              
              <div className="h-px w-full bg-border/60 my-2" />

              {/* Specs */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase text-muted-foreground font-semibold">Processor</span>
                  <span className="text-sm">{phone.processor}</span>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-semibold uppercase text-muted-foreground">
                    <span>Performance</span>
                    <span className="text-foreground">{phone.performanceScore}</span>
                  </div>
                  <Progress value={phone.performanceScore} className="h-2 w-full" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-semibold uppercase text-muted-foreground">
                    <span>Camera</span>
                    <span className="text-foreground">{phone.cameraScore}</span>
                  </div>
                  <Progress value={phone.cameraScore} className="h-2 w-full" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-semibold uppercase text-muted-foreground">
                    <span>Battery</span>
                    <span className="text-foreground">{phone.batteryScore}</span>
                  </div>
                  <Progress value={phone.batteryScore} className="h-2 w-full" />
                </div>
              </div>

              <div className="h-px w-full bg-border/60 my-2" />

              {/* Pros */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Top Pros</span>
                <ul className="flex flex-col gap-1">
                  {phone.pros.slice(0, 2).map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                      <span className="text-muted-foreground">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
