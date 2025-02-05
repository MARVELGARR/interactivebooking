import { create } from "zustand"
import type { BookingFormValues } from "@/lib/schema"
import { calculatePrice } from "@/lib/price-calculator"

interface BookingStore {
  currentStep: number
  formData: Partial<BookingFormValues>
  price: number
  setCurrentStep: (step: number) => void
  updateFormData: (data: Partial<BookingFormValues>) => void
  resetForm: () => void
}

const initialFormData: Partial<BookingFormValues> = {
  fullName: "",
  email: "",
  phone: "",
  fromAddress: "",
  toAddress: "",
  weight: 1,
  size: "Medium",
  speed: "Standard",
  discountCode: "",
  paymentMethod: "Card",
}

export const useBookingStore = create<BookingStore>((set) => ({
  currentStep: 0,
  formData: initialFormData,
  price: calculatePrice(initialFormData as BookingFormValues),
  setCurrentStep: (step) => set({ currentStep: step }),
  updateFormData: (data) =>
    set((state) => {
      const newFormData = { ...state.formData, ...data }
      return {
        formData: newFormData,
        price: calculatePrice(newFormData as BookingFormValues),
      }
    }),
  resetForm: () => set({ formData: initialFormData, currentStep: 0 }),
}))

