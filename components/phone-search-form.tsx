'use client'

import { useState } from 'react'
import { Gamepad2, Camera, Battery, Smartphone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Spinner } from '@/components/ui/spinner'
import type { UsageType } from '@/lib/types'
import { cn } from '@/lib/utils'

const usageOptions: { id: UsageType; label: string; icon: React.ReactNode; description: string }[] = [
  {
    id: 'gaming',
    label: 'Gaming',
    icon: <Gamepad2 className="h-5 w-5" />,
    description: 'Heavy gaming & high performance'
  },
  {
    id: 'camera',
    label: 'Photography',
    icon: <Camera className="h-5 w-5" />,
    description: 'Great photos & videos'
  },
  {
    id: 'battery',
    label: 'Battery Life',
    icon: <Battery className="h-5 w-5" />,
    description: 'All-day usage without charging'
  },
  {
    id: 'daily',
    label: 'Daily Use',
    icon: <Smartphone className="h-5 w-5" />,
    description: 'Balanced for everyday tasks'
  }
]

interface PhoneSearchFormProps {
  onSearch: (budget: number, usageTypes: UsageType[]) => void
  isLoading?: boolean
}

export function PhoneSearchForm({ onSearch, isLoading }: PhoneSearchFormProps) {
  const [budget, setBudget] = useState(60000)
  const [selectedUsages, setSelectedUsages] = useState<UsageType[]>(['daily'])

  const toggleUsage = (usage: UsageType) => {
    setSelectedUsages(prev => {
      if (prev.includes(usage)) {
        return prev.filter(u => u !== usage)
      }
      return [...prev, usage]
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(budget, selectedUsages)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-12">
            {/* Budget Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-foreground">Your Budget</h2>
                <p className="text-sm text-muted-foreground">
                  Drag the slider to set your maximum budget
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    ₹{budget.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-muted-foreground">INR</span>
                </div>
                <Slider
                  value={[budget]}
                  onValueChange={([value]) => setBudget(value)}
                  min={15000}
                  max={160000}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₹15,000</span>
                  <span>₹1,60,000</span>
                </div>
              </div>
            </div>

            {/* Usage Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-foreground">How will you use your phone?</h2>
                <p className="text-sm text-muted-foreground">
                  Select all that apply for better recommendations
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {usageOptions.map(option => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => toggleUsage(option.id)}
                    className={cn(
                      'group flex flex-col items-start gap-3 rounded-xl border p-5 text-left transition-all',
                      selectedUsages.includes(option.id)
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border bg-card hover:border-foreground/30 hover:bg-muted/50'
                    )}
                  >
                    <div className={cn(
                      'flex items-center gap-3',
                      selectedUsages.includes(option.id) ? 'text-background' : 'text-foreground'
                    )}>
                      <div className={cn(
                        'rounded-lg p-2',
                        selectedUsages.includes(option.id)
                          ? 'bg-background/20'
                          : 'bg-muted'
                      )}>
                        {option.icon}
                      </div>
                      <span className="font-medium">{option.label}</span>
                    </div>
                    <span className={cn(
                      'text-sm',
                      selectedUsages.includes(option.id)
                        ? 'text-background/70'
                        : 'text-muted-foreground'
                    )}>
                      {option.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full gap-3 text-base font-medium h-14"
              disabled={isLoading || selectedUsages.length === 0}
            >
              {isLoading ? (
                <>
                  <Spinner className="h-5 w-5" />
                  Finding your perfect phone...
                </>
              ) : (
                <>
                  Find My Phone
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </Button>

            {selectedUsages.length === 0 && (
              <p className="text-center text-sm text-muted-foreground">
                Please select at least one usage type
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
