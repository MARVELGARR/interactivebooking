import type { Control } from "react-hook-form"
import type { BookingFormValues } from "@/lib/schema"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

interface PaymentConfirmationStepProps {
  control: Control<BookingFormValues>
  price: number
  formValues: BookingFormValues
}

export function PaymentConfirmationStep({ control, price, formValues }: PaymentConfirmationStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Payment & Confirmation</h2>
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">From</TableCell>
                <TableCell>{formValues.fromAddress}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">To</TableCell>
                <TableCell>{formValues.toAddress}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Weight</TableCell>
                <TableCell>{formValues.weight} kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Size</TableCell>
                <TableCell>{formValues.size}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Speed</TableCell>
                <TableCell>{formValues.speed}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Total Price</TableCell>
                <TableCell className="text-2xl font-bold text-green-600">${price.toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <FormField
        control={control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Method</FormLabel>
            <FormControl>
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="Card" />
                  </FormControl>
                  <FormLabel className="font-normal">Credit/Debit Card</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="PayPal" />
                  </FormControl>
                  <FormLabel className="font-normal">PayPal</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="Bank Transfer" />
                  </FormControl>
                  <FormLabel className="font-normal">Bank Transfer</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

