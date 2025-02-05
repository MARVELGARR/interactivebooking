# Cargo Shipment Booking System

## Overview

The Cargo Shipment Booking System is a modern, user-friendly web application designed to streamline the process of scheduling cargo shipments. This multi-step form provides an intuitive interface for users to input their shipping details, calculate costs, and complete their bookings efficiently.

## Features

1. **Multi-Step Booking Process**: 
   - User Details
   - Shipment Details
   - Pricing & Summary
   - Payment & Confirmation

2. **Interactive Step Navigation**:
   - Users can navigate between steps using the progress bar
   - Each step is represented by a descriptive icon for easy identification

3. **Dynamic Pricing Calculation**:
   - Real-time price updates based on shipment details
   - Factors in weight, size, speed, and applicable discounts

4. **Form Validation**:
   - Utilizes Zod for robust form validation
   - Validation occurs only on final submission, allowing free navigation between steps

5. **Responsive Design**:
   - Fully responsive layout that works on desktop and mobile devices

6. **State Management**:
   - Uses Zustand for efficient state management across components

7. **Smooth Transitions**:
   - Incorporates Framer Motion for smooth animations between steps

8. **Customizable Shipping Options**:
   - Multiple package sizes (Small, Medium, Large)
   - Various shipping speeds (Standard, Express, Overnight)

9. **Discount Code Support**:
   - Users can enter discount codes for potential price reductions

10. **Multiple Payment Methods**:
    - Supports various payment options (Credit/Debit Card, PayPal, Bank Transfer)

## Technologies Used

- Next.js
- React
- TypeScript
- Zustand (State Management)
- React Hook Form
- Zod (Form Validation)
- Framer Motion (Animations)
- Tailwind CSS
- Shadcn UI Components

## Getting Started

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/cargo-shipment-booking.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`
   cd interactivebooking
   \`\`\`

3. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

4. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- \`/components\`: React components for each step of the booking process
- \`/lib\`: Utility functions and schemas
- \`/store\`: Zustand store for state management
- \`/app\`: Next.js app router files

## Customization

You can customize various aspects of the booking system:

- Modify the \`calculatePrice\` function in \`lib/price-calculator.ts\` to adjust pricing logic
- Update the \`bookingFormSchema\` in \`lib/schema.ts\` to change form validation rules
- Edit the \`steps\` array in \`components/BookingForm.tsx\` to modify the booking steps

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

