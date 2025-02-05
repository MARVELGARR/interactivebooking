import { distanceMatrix, weightPrices, speedMultipliers, discountCodes } from "../data/shipping-data"

interface PriceCalculatorParams {
  fromCity: string
  toCity: string
  weight: number
  speed: "Standard" | "Express" | "Overnight"
  discountCode?: string
}

export function calculateShippingPrice({
  fromCity,
  toCity,
  weight,
  speed,
  discountCode,
}: PriceCalculatorParams): number {
  // Calculate distance
  const distance = distanceMatrix[fromCity]?.[toCity] || 0
  if (distance === 0) {
    throw new Error("Invalid city combination")
  }

  // Calculate base price based on weight
  const weightPrice = weightPrices.find((wp) => weight <= wp.maxWeight)?.pricePerMile || 0.5
  let basePrice = distance * weightPrice

  // Apply speed multiplier
  basePrice *= speedMultipliers[speed]

  // Apply discount if valid
  if (discountCode && discountCode in discountCodes) {
    basePrice *= 1 - discountCodes[discountCode]
  }

  // Round to 2 decimal places
  return Math.round(basePrice * 100) / 100
}

export function getEstimatedDeliveryDate(speed: "Standard" | "Express" | "Overnight"): Date {
  const today = new Date()
  switch (speed) {
    case "Overnight":
      return new Date(today.setDate(today.getDate() + 1))
    case "Express":
      return new Date(today.setDate(today.getDate() + 3))
    case "Standard":
    default:
      return new Date(today.setDate(today.getDate() + 7))
  }
}

