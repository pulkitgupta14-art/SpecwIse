'use client'

import { Check, X, AlertTriangle, ThermometerSun, BatteryWarning, Timer, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import type { RecommendationResult } from '@/lib/types'
import { cn } from '@/lib/utils'

interface PhoneCardProps {
  recommendation: RecommendationResult
  rank: number
  isSelected?: boolean
  onSelect?: () => void
}

export function PhoneCard({ recommendation, rank, isSelected, onSelect }: PhoneCardProps) {
  const { phone, explanation, futurePrediction } = recommendation

  const regretFactors = []
  if (phone.heatingIssue) {
    regretFactors.push({ icon: ThermometerSun, label: 'May heat under heavy load' })
  }
  if (phone.batteryScore < 80) {
    regretFactors.push({ icon: BatteryWarning, label: 'Average battery life' })
  }
  if (phone.longTermScore < 75) {
    regretFactors.push({ icon: Timer, label: 'May slow down sooner' })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Card
      className={cn(
        'relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        isSelected && 'ring-2 ring-primary shadow-md',
        rank === 1 && 'border-primary/40'
      )}
    >
      {rank === 1 && (
        <div className="absolute -top-3 left-4 z-10">
          <Badge className="bg-foreground text-background font-medium">
            Top Pick
          </Badge>
        </div>
      )}

      <CardHeader className="pb-4 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="mb-1 text-sm font-medium text-muted-foreground">
              {phone.brand}
            </div>
            <h3 className="text-xl font-semibold leading-tight text-foreground">
              {phone.name}
            </h3>
            <div className="mt-1 text-xs text-muted-foreground">
              {phone.processor}
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 shrink-0">
            <div className="text-2xl font-bold text-foreground">
              {formatPrice(phone.price)}
            </div>
            {onSelect && (
              <Button
                variant={isSelected ? "secondary" : "default"}
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  onSelect()
                }}
                className={cn("w-full gap-2", isSelected && "bg-muted hover:bg-muted/80")}
              >
                {isSelected ? (
                  <>
                    <X className="h-3 w-3" /> Remove
                  </>
                ) : (
                  <>Compare</>
                )}
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        {/* Scores */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Performance</span>
            <Progress value={phone.performanceScore} className="h-1.5" />
            <span className="text-sm font-semibold text-foreground tabular-nums">{phone.performanceScore}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Camera</span>
            <Progress value={phone.cameraScore} className="h-1.5" />
            <span className="text-sm font-semibold text-foreground tabular-nums">{phone.cameraScore}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Battery</span>
            <Progress value={phone.batteryScore} className="h-1.5" />
            <span className="text-sm font-semibold text-foreground tabular-nums">{phone.batteryScore}</span>
          </div>
        </div>

        {/* AI Explanation */}
        <div className="rounded-lg bg-muted/50 p-4">
          <p className="text-sm text-foreground leading-relaxed">
            {explanation}
          </p>
        </div>

        {/* Pros & Cons */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pros</span>
            <ul className="flex flex-col gap-1.5">
              {phone.pros.slice(0, 3).map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cons</span>
            <ul className="flex flex-col gap-1.5">
              {phone.cons.slice(0, 3).map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regret Factors */}
        {regretFactors.length > 0 && (
          <div className="rounded-lg border border-warning/40 bg-warning/10 p-4">
            <div className="mb-2.5 flex items-center gap-2 text-sm font-medium text-foreground">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <span>Things to Consider</span>
            </div>
            <ul className="flex flex-col gap-2">
              {regretFactors.map((factor, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                  <factor.icon className="h-4 w-4 text-warning" />
                  <span>{factor.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Future Prediction */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Expected Lifespan</span>
            </div>
            <span className="text-xs text-muted-foreground">
              {futurePrediction.confidence}% confidence
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground tabular-nums">
                {futurePrediction.years}
              </span>
              <span className="text-sm text-muted-foreground">years of smooth performance</span>
            </div>
            <Progress value={(futurePrediction.years / 6) * 100} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 year</span>
              <span>6 years</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
