import * as z from "zod"

export const bookingFormSchema = z.object({
  // Step 1: User Details
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),

  // Step 2: Shipment Details
  fromAddress: z.string().min(5, "Address must be at least 5 characters"),
  toAddress: z.string().min(5, "Address must be at least 5 characters"),
  weight: z.number().min(0.1, "Weight must be at least 0.1 kg").max(1000, "Weight cannot exceed 1000 kg"),
  size: z.enum(["Small", "Medium", "Large"]),
  speed: z.enum(["Standard", "Express", "Overnight"]),

  // Step 3: Pricing & Summary
  discountCode: z.string().optional(),

  // Step 4: Payment & Confirmation
  paymentMethod: z.enum(["Card", "PayPal", "Bank Transfer"]),
})

export type BookingFormValues = z.infer<typeof bookingFormSchema>

