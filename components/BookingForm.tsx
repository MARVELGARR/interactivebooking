"use client"

import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { bookingFormSchema, type BookingFormValues } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { UserDetailsStep } from "@/components/UserDetailsStep"
import { ShipmentDetailsStep } from "@/components/ShipmentDetailsStep"
import { PricingSummaryStep } from "@/components/PricingSummaryStep"
import { PaymentConfirmationStep } from "@/components/PaymentConfirmationStep"
import { StepIndicator } from "@/components/StepIndicator"
import { useBookingStore } from "@/store/bookingStore"
import { User, Ship, DollarSign, CreditCard } from "lucide-react"

const steps = [
  { name: "User Details", icon: User },
  { name: "Shipment Details", icon: Ship },
  { name: "Pricing & Summary", icon: DollarSign },
  { name: "Payment & Confirmation", icon: CreditCard },
]

export function BookingForm() {
  
  const { currentStep, formData, price, setCurrentStep, updateFormData } = useBookingStore()

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: formData as BookingFormValues,
    mode: "onSubmit",
  })

  useEffect(() => {
    const subscription = form.watch((value) => updateFormData(value))
    return () => subscription.unsubscribe()
  }, [form, updateFormData])

  function onSubmit(data: BookingFormValues) {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      console.log("Form submitted:", data)
      // Here you would typically send the data to your server
    }
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Cargo Shipment Booking</h1>
      <StepIndicator steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[400px]"
            >
              {currentStep === 0 && <UserDetailsStep control={form.control} />}
              {currentStep === 1 && <ShipmentDetailsStep control={form.control} />}
              {currentStep === 2 && (
                <PricingSummaryStep control={form.control} price={price} formValues={formData as BookingFormValues} />
              )}
              {currentStep === 3 && (
                <PaymentConfirmationStep
                  control={form.control}
                  price={price}
                  formValues={formData as BookingFormValues}
                />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="w-full sm:w-auto"
            >
              Previous
            </Button>
            {currentStep === steps.length - 1 ? (
              <Button type="submit" className="w-full sm:w-auto">
                Confirm Booking
              </Button>
            ) : (
              <Button type="button" onClick={handleNext} className="w-full sm:w-auto">
                Next
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}

