import type { BookingFormValues } from "./schema"

export function calculatePrice(formValues: BookingFormValues): number {
  let basePrice = 10 // Starting base price

  // Adjust price based on weight
  basePrice += formValues.weight * 2

  // Adjust price based on size
  switch (formValues.size) {
    case "Small":
      basePrice *= 1
      break
    case "Medium":
      basePrice *= 1.5
      break
    case "Large":
      basePrice *= 2
      break
  }

  // Adjust price based on speed
  switch (formValues.speed) {
    case "Standard":
      basePrice *= 1
      break
    case "Express":
      basePrice *= 1.5
      break
    case "Overnight":
      basePrice *= 2
      break
  }

  // Apply discount if applicable
  if (formValues.discountCode === "SHIP10") {
    basePrice *= 0.9 // 10% discount
  }

  return Math.round(basePrice * 100) / 100 // Round to 2 decimal places
}

