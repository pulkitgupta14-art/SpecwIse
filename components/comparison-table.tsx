'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Check, X, BarChart3 } from 'lucide-react'
import type { Phone } from '@/lib/types'
import { cn } from '@/lib/utils'

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

interface ComparisonTableProps {
  phones: Phone[]
}

function ScoreCell({ score, isBest }: { score: number; isBest: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <Progress value={score} className="h-1.5 flex-1" />
        <span className={cn(
          'text-sm font-semibold tabular-nums',
          isBest ? 'text-success' : 'text-foreground'
        )}>
          {score}
        </span>
      </div>
    </div>
  )
}

function BooleanCell({ value, isGood }: { value: boolean; isGood: boolean }) {
  if (isGood) {
    return (
      <div className="flex items-center gap-1.5 text-success">
        <Check className="h-4 w-4" />
        <span className="text-sm font-medium">No issues</span>
      </div>
    )
  }
  return (
    <div className="flex items-center gap-1.5 text-destructive">
      <X className="h-4 w-4" />
      <span className="text-sm font-medium">Yes</span>
    </div>
  )
}

function getBestValue(phones: Phone[], key: keyof Phone, type: 'max' | 'min' = 'max'): number {
  const values = phones.map(p => p[key] as number)
  return type === 'max' ? Math.max(...values) : Math.min(...values)
}

export function ComparisonTable({ phones }: ComparisonTableProps) {
  if (phones.length < 2) return null

  const bestPerformance = getBestValue(phones, 'performanceScore')
  const bestCamera = getBestValue(phones, 'cameraScore')
  const bestBattery = getBestValue(phones, 'batteryScore')
  const bestPrice = getBestValue(phones, 'price', 'min')
  const bestLongTerm = getBestValue(phones, 'longTermScore')
  const bestUpdateYears = getBestValue(phones, 'updateYears')

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-muted/30 py-5">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-lg">Side-by-Side Comparison</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[140px] bg-muted/30 font-semibold">Specification</TableHead>
                {phones.map(phone => (
                  <TableHead key={phone.id} className="min-w-[180px]">
                    <div className="flex flex-col gap-0.5 py-1">
                      <span className="text-xs text-muted-foreground">{phone.brand}</span>
                      <span className="font-semibold text-foreground">{phone.name}</span>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium bg-muted/20">Price</TableCell>
                {phones.map(phone => (
                  <TableCell 
                    key={phone.id}
                    className={cn(phone.price === bestPrice && 'bg-success/5')}
                  >
                    <span className={cn(
                      'text-xl font-bold',
                      phone.price === bestPrice ? 'text-success' : 'text-foreground'
                    )}>
                      {formatPrice(phone.price)}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/20">Processor</TableCell>
                {phones.map(phone => (
                  <TableCell key={phone.id}>
                    <span className="text-sm text-foreground">{phone.processor}</span>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/20">Performance</TableCell>
                {phones.map(phone => (
                  <TableCell 
                    key={phone.id}
                    className={cn(phone.performanceScore === bestPerformance && 'bg-success/5')}
                  >
                    <ScoreCell score={phone.performanceScore} isBest={phone.performanceScore === bestPerformance} />
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/20">Camera</TableCell>
                {phones.map(phone => (
                  <TableCell 
                    key={phone.id}
                    className={cn(phone.cameraScore === bestCamera && 'bg-success/5')}
                  >
                    <ScoreCell score={phone.cameraScore} isBest={phone.cameraScore === bestCamera} />
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/20">Battery</TableCell>
                {phones.map(phone => (
                  <TableCell 
                    key={phone.id}
                    className={cn(phone.batteryScore === bestBattery && 'bg-success/5')}
                  >
                    <ScoreCell score={phone.batteryScore} isBest={phone.batteryScore === bestBattery} />
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/20">Long-term Score</TableCell>
                {phones.map(phone => (
                  <TableCell 
                    key={phone.id}
                    className={cn(phone.longTermScore === bestLongTerm && 'bg-success/5')}
                  >
                    <ScoreCell score={phone.longTermScore} isBest={phone.longTermScore === bestLongTerm} />
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/20">Heating Issues</TableCell>
                {phones.map(phone => (
                  <TableCell 
                    key={phone.id}
                    className={cn(!phone.heatingIssue && 'bg-success/5')}
                  >
                    <BooleanCell value={phone.heatingIssue} isGood={!phone.heatingIssue} />
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/20">Update Support</TableCell>
                {phones.map(phone => (
                  <TableCell 
                    key={phone.id}
                    className={cn(phone.updateYears === bestUpdateYears && 'bg-success/5')}
                  >
                    <span className={cn(
                      'text-sm font-semibold',
                      phone.updateYears === bestUpdateYears ? 'text-success' : 'text-foreground'
                    )}>
                      {phone.updateYears} years
                    </span>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium bg-muted/20">Value Score</TableCell>
                {phones.map(phone => {
                  const avgScore = (phone.performanceScore + phone.cameraScore + phone.batteryScore) / 3
                  const valueScore = Math.round(avgScore / (phone.price / 1000) * 10) / 10
                  const maxValue = Math.max(...phones.map(p => {
                    const avg = (p.performanceScore + p.cameraScore + p.batteryScore) / 3
                    return Math.round(avg / (p.price / 1000) * 10) / 10
                  }))
                  const isBest = valueScore === maxValue
                  
                  return (
                    <TableCell key={phone.id} className={cn(isBest && 'bg-success/5')}>
                      <div className="flex items-center gap-2">
                        <span className={cn(
                          'text-xl font-bold',
                          isBest ? 'text-success' : 'text-foreground'
                        )}>
                          {valueScore.toFixed(1)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {valueScore >= 1.2 ? 'Excellent' : valueScore >= 1.0 ? 'Good' : 'Fair'}
                        </span>
                      </div>
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
