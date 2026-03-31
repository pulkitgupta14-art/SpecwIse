import type { Phone, UsageType, RecommendationResult, FuturePrediction } from './types'
import { PrismaClient } from '@/lib/generated/prisma'

const prisma = new PrismaClient()

function mapToPhone(p: any): Phone {
  return {
    ...p,
    pros: JSON.parse(p.pros),
    cons: JSON.parse(p.cons)
  }
}

interface UsageWeights {
  performance: number
  camera: number
  battery: number
  longTerm: number
}

const usageWeightMap: Record<UsageType, UsageWeights> = {
  gaming: { performance: 0.5, camera: 0.1, battery: 0.2, longTerm: 0.2 },
  camera: { performance: 0.2, camera: 0.5, battery: 0.1, longTerm: 0.2 },
  battery: { performance: 0.2, camera: 0.1, battery: 0.5, longTerm: 0.2 },
  daily: { performance: 0.25, camera: 0.25, battery: 0.25, longTerm: 0.25 }
}

function calculateWeights(usageTypes: UsageType[]): UsageWeights {
  if (usageTypes.length === 0) {
    return usageWeightMap.daily
  }

  const combined: UsageWeights = { performance: 0, camera: 0, battery: 0, longTerm: 0 }
  
  for (const usage of usageTypes) {
    const weights = usageWeightMap[usage]
    combined.performance += weights.performance
    combined.camera += weights.camera
    combined.battery += weights.battery
    combined.longTerm += weights.longTerm
  }

  const total = combined.performance + combined.camera + combined.battery + combined.longTerm
  
  return {
    performance: combined.performance / total,
    camera: combined.camera / total,
    battery: combined.battery / total,
    longTerm: combined.longTerm / total
  }
}

function calculateScore(phone: Phone, weights: UsageWeights): number {
  return (
    phone.performanceScore * weights.performance +
    phone.cameraScore * weights.camera +
    phone.batteryScore * weights.battery +
    phone.longTermScore * weights.longTerm
  )
}

function generateExplanation(phone: Phone, usageTypes: UsageType[], score: number): string {
  const explanations: string[] = []
  
  const primaryUsage = usageTypes[0] || 'daily'
  
  switch (primaryUsage) {
    case 'gaming':
      if (phone.performanceScore >= 90) {
        explanations.push(`This phone excels at gaming with its powerful ${phone.processor} chip delivering top-tier performance.`)
      } else if (phone.performanceScore >= 80) {
        explanations.push(`Solid gaming performance with the ${phone.processor}, handling most games smoothly.`)
      } else {
        explanations.push(`The ${phone.processor} handles casual gaming well, though intensive titles may see some compromises.`)
      }
      break
    case 'camera':
      if (phone.cameraScore >= 90) {
        explanations.push(`Outstanding camera system that rivals professional equipment for everyday photography.`)
      } else if (phone.cameraScore >= 80) {
        explanations.push(`Very capable camera that produces great photos in most conditions.`)
      } else {
        explanations.push(`Decent camera for social media and everyday shots.`)
      }
      break
    case 'battery':
      if (phone.batteryScore >= 90) {
        explanations.push(`Exceptional battery life that easily lasts a full day of heavy use.`)
      } else if (phone.batteryScore >= 80) {
        explanations.push(`Reliable battery that gets most users through a full day.`)
      } else {
        explanations.push(`Average battery life - power users may need a midday charge.`)
      }
      break
    default:
      explanations.push(`A well-rounded device that balances performance, camera, and battery for everyday use.`)
  }

  if (phone.updateYears >= 5) {
    explanations.push(`With ${phone.updateYears} years of promised updates, this phone will stay secure and feature-rich for years to come.`)
  }

  if (phone.heatingIssue) {
    explanations.push(`Note: Some users report the device runs warm during intensive tasks.`)
  }

  return explanations.join(' ')
}

function predictFuture(phone: Phone): FuturePrediction {
  const baseYears = 2
  const performanceBonus = phone.performanceScore >= 85 ? 1 : 0.5
  const batteryBonus = phone.batteryScore >= 85 ? 0.5 : 0.25
  const updateBonus = Math.min(phone.updateYears / 2, 2)
  const longTermBonus = phone.longTermScore >= 85 ? 1 : 0.5
  
  const years = Math.round((baseYears + performanceBonus + batteryBonus + updateBonus + longTermBonus) * 10) / 10
  const confidence = Math.min(95, 60 + phone.longTermScore * 0.3 + phone.updateYears * 2)
  
  const factors: string[] = []
  if (phone.updateYears >= 5) factors.push('Long software support')
  if (phone.performanceScore >= 90) factors.push('Powerful processor')
  if (phone.batteryScore >= 85) factors.push('Good battery health')
  if (phone.longTermScore >= 85) factors.push('Built for longevity')
  if (phone.heatingIssue) factors.push('Thermal management concerns')
  
  return {
    years: Math.min(years, 6),
    confidence: Math.round(confidence),
    factors
  }
}

export async function getRecommendations(
  budget: number,
  usageTypes: UsageType[],
  limit: number = 5
): Promise<RecommendationResult[]> {
  const allDbPhones = await prisma.phone.findMany()
  const phones = allDbPhones.map(mapToPhone)

  const eligiblePhones = phones.filter(phone => phone.price <= budget)
  
  if (eligiblePhones.length === 0) {
    const cheapestPhones = [...phones]
      .sort((a, b) => a.price - b.price)
      .slice(0, limit)
    
    const weights = calculateWeights(usageTypes)
    
    return cheapestPhones.map(phone => {
      const score = calculateScore(phone, weights)
      return {
        phone,
        explanation: `While slightly above your budget, ${phone.name} offers ${generateExplanation(phone, usageTypes, score)}`,
        score,
        futurePrediction: predictFuture(phone)
      }
    })
  }

  const weights = calculateWeights(usageTypes)
  
  const scoredPhones = eligiblePhones.map(phone => ({
    phone,
    score: calculateScore(phone, weights)
  }))

  scoredPhones.sort((a, b) => b.score - a.score)

  return scoredPhones.slice(0, limit).map(({ phone, score }) => ({
    phone,
    explanation: generateExplanation(phone, usageTypes, score),
    score,
    futurePrediction: predictFuture(phone)
  }))
}

export async function getAllPhones(): Promise<Phone[]> {
  const allDbPhones = await prisma.phone.findMany()
  return allDbPhones.map(mapToPhone)
}

export async function getPhoneById(id: string): Promise<Phone | undefined> {
  const p = await prisma.phone.findUnique({ where: { id } })
  return p ? mapToPhone(p) : undefined
}

export async function comparePhones(ids: string[]): Promise<Phone[]> {
  const dbPhones = await prisma.phone.findMany({
    where: { id: { in: ids } }
  })
  return dbPhones.map(mapToPhone)
}
