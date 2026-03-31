'use client'

import { useState } from 'react'
import { PhoneCard } from './phone-card'
import { ComparisonTable } from './comparison-table'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BarChart3, CheckCircle2 } from 'lucide-react'
import type { RecommendationResult } from '@/lib/types'

interface ResultsSectionProps {
  recommendations: RecommendationResult[]
  onReset: () => void
}

export function ResultsSection({ recommendations, onReset }: ResultsSectionProps) {
  const [selectedPhoneIds, setSelectedPhoneIds] = useState<string[]>([])
  const [showComparison, setShowComparison] = useState(false)

  const togglePhoneSelection = (phoneId: string) => {
    setSelectedPhoneIds(prev => {
      if (prev.includes(phoneId)) {
        return prev.filter(id => id !== phoneId)
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), phoneId]
      }
      return [...prev, phoneId]
    })
  }

  const selectedPhones = recommendations
    .filter(r => selectedPhoneIds.includes(r.phone.id))
    .map(r => r.phone)

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6">
          <Button
            variant="ghost"
            onClick={onReset}
            className="-ml-2 w-fit gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Start Over
          </Button>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                Top Recommendations
              </h1>
              <p className="mt-2 text-muted-foreground">
                Based on your budget and preferences. Click to select phones for comparison.
              </p>
            </div>

            {selectedPhoneIds.length >= 2 && (
              <Button
                onClick={() => setShowComparison(!showComparison)}
                variant={showComparison ? 'secondary' : 'default'}
                className="gap-2 shrink-0"
              >
                <BarChart3 className="h-4 w-4" />
                {showComparison ? 'Hide Comparison' : `Compare ${selectedPhoneIds.length} Phones`}
              </Button>
            )}
          </div>

          {/* Selection indicator */}
          {selectedPhoneIds.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>
                {selectedPhoneIds.length} phone{selectedPhoneIds.length > 1 ? 's' : ''} selected
                {selectedPhoneIds.length === 1 && ' - select one more to compare'}
              </span>
            </div>
          )}
        </div>

        {/* Comparison Table */}
        {showComparison && selectedPhones.length >= 2 && (
          <div className="mb-12">
            <ComparisonTable phones={selectedPhones} />
          </div>
        )}

        {/* Phone Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((rec, index) => (
            <PhoneCard
              key={rec.phone.id}
              recommendation={rec}
              rank={index + 1}
              isSelected={selectedPhoneIds.includes(rec.phone.id)}
              onSelect={() => togglePhoneSelection(rec.phone.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
