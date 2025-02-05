import type { Control } from "react-hook-form"
import type { BookingFormValues } from "@/lib/schema"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

interface PricingSummaryStepProps {
  control: Control<BookingFormValues>
  price: number
  formValues: BookingFormValues
}

export function PricingSummaryStep({ control, price, formValues }: PricingSummaryStepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Pricing & Summary</h2>
      <Card>
        <CardHeader>
          <CardTitle>Shipment Summary</CardTitle>
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
                <TableCell className="font-medium">Estimated Price</TableCell>
                <TableCell className="text-2xl font-bold text-green-600">${price.toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <FormField
        control={control}
        name="discountCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Discount Code</FormLabel>
            <FormControl>
              <Input placeholder="Enter discount code" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

