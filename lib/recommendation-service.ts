import { phones } from './phones-data'
import type { Phone, UsageType, RecommendationResult } from './types'

const usageWeights: Record<UsageType, { performance: number; camera: number; battery: number }> = {
  gaming: { performance: 0.5, camera: 0.1, battery: 0.4 },
  camera: { performance: 0.2, camera: 0.6, battery: 0.2 },
  battery: { performance: 0.2, camera: 0.2, battery: 0.6 },
  daily: { performance: 0.35, camera: 0.35, battery: 0.3 }
}

function calculateScore(phone: Phone, usageTypes: UsageType[]): number {
  if (usageTypes.length === 0) {
    usageTypes = ['daily']
  }

  const combinedWeights = { performance: 0, camera: 0, battery: 0 }
  
  for (const usage of usageTypes) {
    const weights = usageWeights[usage]
    combinedWeights.performance += weights.performance
    combinedWeights.camera += weights.camera
    combinedWeights.battery += weights.battery
  }

  // Normalize weights
  const total = combinedWeights.performance + combinedWeights.camera + combinedWeights.battery
  combinedWeights.performance /= total
  combinedWeights.camera /= total
  combinedWeights.battery /= total

  const baseScore = 
    phone.performanceScore * combinedWeights.performance +
    phone.cameraScore * combinedWeights.camera +
    phone.batteryScore * combinedWeights.battery

  // Bonus for long-term score and value
  const longevityBonus = phone.longTermScore * 0.1
  
  return baseScore + longevityBonus
}

function generateExplanation(phone: Phone, usageTypes: UsageType[]): string {
  const explanations: string[] = []
  
  if (usageTypes.includes('gaming')) {
    if (phone.performanceScore >= 90) {
      explanations.push(`With its ${phone.processor} chip and ${phone.performanceScore}/100 performance score, this phone handles demanding games smoothly.`)
    } else {
      explanations.push(`The ${phone.processor} provides decent gaming performance for most titles.`)
    }
  }
  
  if (usageTypes.includes('camera')) {
    if (phone.cameraScore >= 90) {
      explanations.push(`Outstanding camera system with a ${phone.cameraScore}/100 score - perfect for photography enthusiasts.`)
    } else {
      explanations.push(`Capable camera setup that handles everyday photography well.`)
    }
  }
  
  if (usageTypes.includes('battery')) {
    if (phone.batteryScore >= 85) {
      explanations.push(`Excellent battery life (${phone.batteryScore}/100) means you won't worry about charging throughout the day.`)
    } else {
      explanations.push(`Battery life is adequate for moderate usage patterns.`)
    }
  }
  
  if (usageTypes.includes('daily') || usageTypes.length === 0) {
    explanations.push(`Well-balanced for everyday use with solid performance across all areas.`)
  }

  // Add value proposition
  if (phone.price < 500) {
    explanations.push(`At $${phone.price}, it offers exceptional value for its features.`)
  } else if (phone.price > 1000) {
    explanations.push(`Premium pricing reflects its top-tier components and build quality.`)
  }

  return explanations.join(' ')
}

function calculateFuturePrediction(phone: Phone): { years: number; confidence: number } {
  // Base prediction on long-term score and update years
  const basePrediction = (phone.longTermScore / 100) * phone.updateYears
  const years = Math.min(Math.max(Math.round(basePrediction * 10) / 10, 1), 6)
  
  // Confidence based on brand reliability and age
  let confidence = 70
  
  if (['Apple', 'Samsung', 'Google'].includes(phone.brand)) {
    confidence += 15
  }
  
  if (phone.updateYears >= 5) {
    confidence += 10
  }
  
  if (phone.heatingIssue) {
    confidence -= 10
  }
  
  return { years, confidence: Math.min(confidence, 95) }
}

export function getRecommendations(budget: number, usageTypes: UsageType[]): RecommendationResult[] {
  // Filter phones within budget (allow 10% over for edge cases)
  const affordablePhones = phones.filter(phone => phone.price <= budget * 1.1)
  
  if (affordablePhones.length === 0) {
    // Return cheapest phones if budget is too low
    return phones
      .sort((a, b) => a.price - b.price)
      .slice(0, 3)
      .map(phone => ({
        phone,
        score: calculateScore(phone, usageTypes),
        explanation: generateExplanation(phone, usageTypes) + ' Note: This phone is slightly above your budget.',
        futurePrediction: calculateFuturePrediction(phone)
      }))
  }
  
  // Score and sort phones
  const scoredPhones = affordablePhones
    .map(phone => ({
      phone,
      score: calculateScore(phone, usageTypes),
      explanation: generateExplanation(phone, usageTypes),
      futurePrediction: calculateFuturePrediction(phone)
    }))
    .sort((a, b) => b.score - a.score)
  
  // Return top 5 recommendations
  return scoredPhones.slice(0, 5)
}

export function getAllPhones(): Phone[] {
  return phones
}

export function getPhoneById(id: string): Phone | undefined {
  return phones.find(phone => phone.id === id)
}

export function comparePhones(ids: string[]): Phone[] {
  return phones.filter(phone => ids.includes(phone.id))
}
