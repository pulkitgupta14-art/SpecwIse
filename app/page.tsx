'use client'

import { useState } from 'react'
import { HeroSection } from '@/components/hero-section'
import { PhoneSearchForm } from '@/components/phone-search-form'
import { ResultsSection } from '@/components/results-section'
import { Footer } from '@/components/footer'
import type { RecommendationResult, UsageType } from '@/lib/types'

export default function Home() {
  const [recommendations, setRecommendations] = useState<RecommendationResult[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (budget: number, usageTypes: UsageType[]) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ budget, usageTypes })
      })
      
      if (!response.ok) throw new Error('Failed to fetch recommendations')
      
      const data = await response.json()
      setRecommendations(data.recommendations)
    } catch (error) {
      console.error('Error fetching recommendations:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setRecommendations(null)
  }

  return (
    <main className="min-h-screen">
      {!recommendations ? (
        <>
          <HeroSection />
          <PhoneSearchForm onSearch={handleSearch} isLoading={isLoading} />
        </>
      ) : (
        <ResultsSection recommendations={recommendations} onReset={handleReset} />
      )}
      <Footer />
    </main>
  )
}
