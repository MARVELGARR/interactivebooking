import type { Control } from "react-hook-form"
import type { BookingFormValues } from "@/lib/schema"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

interface ShipmentDetailsStepProps {
  control: Control<BookingFormValues>
}

export function ShipmentDetailsStep({ control }: ShipmentDetailsStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Shipment Details</h2>
      <FormField
        control={control}
        name="fromAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>From Address</FormLabel>
            <FormControl>
              <Input placeholder="123 Sender St, City, Country" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="toAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>To Address</FormLabel>
            <FormControl>
              <Input placeholder="456 Receiver Ave, City, Country" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="weight"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Weight (kg)</FormLabel>
            <FormControl>
              <Slider
                min={0.1}
                max={1000}
                step={0.1}
                value={[field.value]}
                onValueChange={(value) => field.onChange(value[0])}
              />
            </FormControl>
            <div className="text-sm text-gray-500 mt-1">{field.value} kg</div>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="size"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Package Size</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select package size" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Small">Small</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Large">Large</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="speed"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Delivery Speed</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select delivery speed" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Standard">Standard</SelectItem>
                <SelectItem value="Express">Express</SelectItem>
                <SelectItem value="Overnight">Overnight</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

