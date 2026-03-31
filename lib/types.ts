export interface Phone {
  id: string
  name: string
  brand: string
  price: number
  processor: string
  cameraScore: number
  batteryScore: number
  performanceScore: number
  heatingIssue: boolean
  longTermScore: number
  pros: string[]
  cons: string[]
  imageUrl: string
  backImageUrl: string
  releaseYear: number
  updateYears: number
}

export interface RecommendationRequest {
  budget: number
  usageTypes: UsageType[]
}

export type UsageType = 'gaming' | 'camera' | 'battery' | 'daily'

export interface FuturePrediction {
  years: number
  confidence: number
  factors: string[]
}

export interface RecommendationResult {
  phone: Phone
  score: number
  explanation: string
  futurePrediction: FuturePrediction
}
