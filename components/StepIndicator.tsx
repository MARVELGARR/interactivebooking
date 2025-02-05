import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface StepIndicatorProps {
  steps: { name: string; icon: LucideIcon }[]
  currentStep: number
  onStepClick: (step: number) => void
}

export function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="relative mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.name} className="flex flex-col items-center relative z-10">
            
            <button
              onClick={() => onStepClick(index)}
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                index <= currentStep ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
              } transition-colors duration-200 ease-in-out`}
            >
              <step.icon size={24} />
            </button>
            <span className="mt-2 text-sm font-medium text-gray-500">{step.name}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-6 left-0 w-full h-1 bg-gray-200 -z-10">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  )
}

