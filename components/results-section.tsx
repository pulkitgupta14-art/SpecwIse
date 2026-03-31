'use client'

import { useState } from 'react'
import { PhoneCard } from './phone-card'
import { ComparisonPanel } from './comparison-panel'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, BarChart3, CheckCircle2, Search } from 'lucide-react'
import type { RecommendationResult } from '@/lib/types'

interface ResultsSectionProps {
  recommendations: RecommendationResult[]
  onReset: () => void
}

export function ResultsSection({ recommendations, onReset }: ResultsSectionProps) {
  const [selectedPhoneIds, setSelectedPhoneIds] = useState<string[]>([])
  const [showComparison, setShowComparison] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [budgetFilter, setBudgetFilter] = useState('all')

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

  const filteredRecommendations = recommendations.filter(rec => {
    const term = searchQuery.toLowerCase()
    const matchesSearch = rec.phone.name.toLowerCase().includes(term) || rec.phone.brand.toLowerCase().includes(term)
    if (!matchesSearch) return false
    
    if (budgetFilter === 'under_50k') return rec.phone.price < 50000
    if (budgetFilter === 'under_100k') return rec.phone.price < 100000
    if (budgetFilter === 'above_100k') return rec.phone.price >= 100000
    
    return true
  })

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

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search phones..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-full bg-background"
            />
          </div>
          <Select value={budgetFilter} onValueChange={setBudgetFilter}>
            <SelectTrigger className="w-full sm:w-[180px] bg-background">
              <SelectValue placeholder="Budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Budgets</SelectItem>
              <SelectItem value="under_50k">Under ₹50,000</SelectItem>
              <SelectItem value="under_100k">Under ₹1,00,000</SelectItem>
              <SelectItem value="above_100k">Above ₹1,00,000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Comparison Panel */}
        {showComparison && selectedPhones.length >= 2 && (
          <ComparisonPanel phones={selectedPhones} />
        )}

        {/* Phone Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredRecommendations.length > 0 ? (
            filteredRecommendations.map((rec, index) => (
            <PhoneCard
              key={rec.phone.id}
              recommendation={rec}
              rank={index + 1}
              isSelected={selectedPhoneIds.includes(rec.phone.id)}
              onSelect={() => togglePhoneSelection(rec.phone.id)}
            />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              No phones match your search criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
