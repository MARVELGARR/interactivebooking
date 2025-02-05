import { useState, useEffect } from "react"
import { calculateShippingPrice, getEstimatedDeliveryDate } from "../utils/price-calculator"
import { cities } from "../data/shipping-data"

interface ShippingFormState {
  fullName: string
  email: string
  phone: string
  fromCity: string
  toCity: string
  weight: number
  speed: "Standard" | "Express" | "Overnight"
  discountCode: string
}

export function useShippingForm() {
  const [formState, setFormState] = useState<ShippingFormState>({
    fullName: "",
    email: "",
    phone: "",
    fromCity: cities[0],
    toCity: cities[1],
    weight: 1,
    speed: "Standard",
    discountCode: "",
  })

  const [price, setPrice] = useState(0)
  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState<Date | null>(null)

  useEffect(() => {
    try {
      const calculatedPrice = calculateShippingPrice({
        fromCity: formState.fromCity,
        toCity: formState.toCity,
        weight: formState.weight,
        speed: formState.speed,
        discountCode: formState.discountCode,
      })
      setPrice(calculatedPrice)

      const deliveryDate = getEstimatedDeliveryDate(formState.speed)
      setEstimatedDeliveryDate(deliveryDate)
    } catch (error) {
      console.error("Error calculating price:", error)
      setPrice(0)
      setEstimatedDeliveryDate(null)
    }
  }, [formState])

  const updateFormState = (field: keyof ShippingFormState, value: string | number) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  return {
    formState,
    updateFormState,
    price,
    estimatedDeliveryDate,
  }
}

