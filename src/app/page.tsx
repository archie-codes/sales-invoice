// "use client";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { CalendarIcon, Eraser, PrinterCheck } from "lucide-react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Calendar } from "@/components/ui/calendar";
// import { Textarea } from "@/components/ui/textarea";
// import { format } from "date-fns";
// import { useInvoiceStore } from "@/lib/invoiceStore";
// import { cn } from "@/lib/utils";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function InvoiceInputPage() {
//   const router = useRouter();
//   const [open, setOpen] = useState(false); // 👈 control popover state

//   const {
//     date,
//     name,
//     tin,
//     business,
//     items,
//     totals,
//     setField,
//     updateItem,
//     setTotal,
//   } = useInvoiceStore();

//   const handlePreview = () => {
//     router.push("/print"); // ✅ navigate to print preview
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-5 mb-5 p-4 rounded-2xl border-2 border-gray-300 space-y-4 shadow-2xl">
//       <h1 className="text-xl font-bold mb-4 text-center">SALES INVOICE</h1>
//       <hr />
//       {/* Header fields */}
//       <div className="space-y-2">
//         {/* Date Field */}
//         <div className="flex flex-col space-y-1">
//           <Label>Date</Label>
//           <Popover open={open} onOpenChange={setOpen}>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
//                 onClick={() => setOpen(true)}
//                 className={cn(
//                   "w-full justify-start text-left font-normal",
//                   !date && "text-muted-foreground"
//                 )}
//               >
//                 <CalendarIcon className="mr-2 h-4 w-4" />
//                 {date ? (
//                   format(new Date(date), "MMMM dd, yyyy")
//                 ) : (
//                   <span>Pick a date</span>
//                 )}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0" align="start">
//               <Calendar
//                 mode="single"
//                 selected={date ? new Date(date) : undefined}
//                 onSelect={(selectedDate) => {
//                   if (selectedDate) {
//                     setField("date", selectedDate.toISOString());
//                     setOpen(false); // 👈 automatically close popover
//                   }
//                 }}
//                 initialFocus
//               />
//             </PopoverContent>
//           </Popover>
//         </div>

//         {/* Name */}
//         <div className="space-y-1">
//           <Label>Registered Name</Label>
//           <Input
//             value={name}
//             onChange={(e) => setField("name", e.target.value)}
//             placeholder="Enter Business or Customer Name"
//           />
//         </div>

//         {/* TIN */}
//         <div className="space-y-1">
//           <Label>TIN</Label>
//           <Input
//             value={tin}
//             onChange={(e) => setField("tin", e.target.value)}
//             placeholder="Enter TIN. eg. 123-456-789-000"
//           />
//         </div>

//         {/* Business Address */}
//         <div className="space-y-1">
//           <Label>Business Address</Label>
//           <Textarea
//             value={business}
//             onChange={(e) => setField("business", e.target.value)}
//             placeholder="Enter Address. e.g. 1234 Main St, City, Country"
//             className="resize-none"
//             rows={2} // 👈 auto height for 2 lines
//           />
//         </div>
//       </div>

//       {/* Items Section */}
//       <div className="mt-6 space-y-3">
//         {/* Table Header */}
//         <div className="flex font-medium text-sm border-b pb-1 mb-1">
//           <div className="w-1/4">Item Description</div>
//           <div className="w-1/4 text-center">Qty</div>
//           <div className="w-1/4 text-center">U. Price / Cost</div>
//           <div className="w-1/4 text-center">Amount</div>
//         </div>

//         {/* Table Rows */}
//         {items.map((item, i) => (
//           <div key={i} className="flex items-center gap-2 py-1 border-b">
//             <div className="w-1/4 text-sm font-medium">{item.desc}</div>

//             {/* Qty */}
//             <div className="w-1/4">
//               <Input
//                 type="number"
//                 value={item.qty}
//                 onChange={(e) => {
//                   const qty = parseFloat(e.target.value) || 0;
//                   const price = parseFloat(item.price) || 0;
//                   const amount = qty * price;
//                   updateItem(i, "qty", qty.toString());
//                   updateItem(i, "amount", amount ? amount.toFixed(2) : "");
//                 }}
//                 placeholder="Qty"
//                 className="text-center"
//               />
//             </div>

//             {/* Price */}
//             <div className="w-1/4">
//               <Input
//                 type="number"
//                 value={item.price}
//                 onChange={(e) => {
//                   const price = parseFloat(e.target.value) || 0;
//                   const qty = parseFloat(item.qty) || 0;
//                   const amount = qty * price;
//                   updateItem(i, "price", price.toString());
//                   updateItem(i, "amount", amount ? amount.toFixed(2) : "");
//                 }}
//                 placeholder="U. Price"
//                 className="text-center"
//               />
//             </div>

//             {/* Amount (Read-only) */}
//             <div className="w-1/4">
//               <Input
//                 type="text"
//                 value={
//                   item.amount
//                     ? parseFloat(item.amount).toLocaleString("en-US", {
//                         minimumFractionDigits: 2,
//                         maximumFractionDigits: 2,
//                       })
//                     : ""
//                 }
//                 readOnly
//                 placeholder="Amount"
//                 className="text-center bg-gray-50 cursor-not-allowed"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Totals Section */}
//       <div className="mt-6 space-y-3">
//         {Object.entries(totals).map(([key, value]) => {
//           const formattedValue =
//             value && !isNaN(Number(value))
//               ? parseFloat(value).toLocaleString("en-US", {
//                   minimumFractionDigits: 2,
//                   maximumFractionDigits: 2,
//                 })
//               : value || "";

//           return (
//             <div key={key} className="space-y-1">
//               <Label className="capitalize font-semibold">
//                 {key
//                   .replace(/([A-Z])/g, " $1")
//                   .replace(/^./, (str) => str.toUpperCase())}
//               </Label>

//               <Input
//                 type="text"
//                 defaultValue={formattedValue}
//                 className="bg-white border text-right font-medium focus:ring-2 focus:ring-blue-400"
//                 onFocus={(e) => {
//                   // remove commas while editing
//                   e.target.value = value ? value.replace(/,/g, "") : "";
//                 }}
//                 onChange={(e) => {
//                   const inputValue = e.target.value.replace(/,/g, "");
//                   if (!isNaN(Number(inputValue))) {
//                     useInvoiceStore.setState((state) => ({
//                       totals: {
//                         ...state.totals,
//                         [key]: inputValue,
//                       },
//                     }));
//                   }
//                 }}
//                 onBlur={(e) => {
//                   const num = parseFloat(e.target.value);
//                   if (!isNaN(num)) {
//                     const formatted = num.toLocaleString("en-US", {
//                       minimumFractionDigits: 2,
//                       maximumFractionDigits: 2,
//                     });
//                     e.target.value = formatted;
//                     useInvoiceStore.setState((state) => ({
//                       totals: {
//                         ...state.totals,
//                         [key]: formatted,
//                       },
//                     }));
//                   }
//                 }}
//               />
//             </div>
//           );
//         })}
//       </div>

//       {/* Buttons */}
//       <div className="pt-6 flex justify-between">
//         <Button variant="outline" onClick={() => location.reload()}>
//           <Eraser /> Clear
//         </Button>
//         <Button onClick={handlePreview} className="w-40">
//           <PrinterCheck /> Preview Invoice
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Eraser, FileCheck as PrinterCheck } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import { useInvoiceStore } from "@/lib/invoiceStore"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function InvoiceInputPage() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const { date, name, tin, business, items, totals, setField, updateItem, clearAll } = useInvoiceStore()

  const handlePreview = () => {
    router.push("/print")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="mx-auto max-w-4xl">
        <Card className="shadow-xl border-slate-200">
          <CardHeader className="border-b bg-gradient-to-r text-black/80">
            <CardTitle className="text-center text-3xl font-bold tracking-tight">SALES INVOICE</CardTitle>
          </CardHeader>

          <CardContent className="space-y-8 pt-8">
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Date Field */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase tracking-wide text-slate-600">Date</Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => setOpen(true)}
                        className={cn(
                          "w-full justify-start text-left font-normal hover:bg-slate-50 transition-colors",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(new Date(date), "MMMM dd, yyyy") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date ? new Date(date) : undefined}
                        onSelect={(selectedDate) => {
                          if (selectedDate) {
                            setField("date", selectedDate.toISOString())
                            setOpen(false)
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* TIN */}
                <div className="space-y-2">
                  <Label htmlFor="tin" className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    TIN
                  </Label>
                  <Input
                    id="tin"
                    value={tin}
                    onChange={(e) => setField("tin", e.target.value)}
                    placeholder="e.g. 123-456-789-000"
                    className="transition-all focus:ring-2 focus:ring-slate-400"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Registered Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setField("name", e.target.value)}
                  placeholder="Enter Business or Customer Name"
                  className="font-medium transition-all focus:ring-2 focus:ring-slate-400"
                />
              </div>

              {/* Business Address */}
              <div className="space-y-2">
                <Label htmlFor="business" className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Business Address
                </Label>
                <Textarea
                  id="business"
                  value={business}
                  onChange={(e) => setField("business", e.target.value)}
                  placeholder="Enter complete business address"
                  className="resize-none transition-all focus:ring-2 focus:ring-slate-400"
                  rows={2}
                />
              </div>
            </div>

            <Separator className="my-8" />

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">Invoice Items</h3>

              {/* Table Header */}
              <div className="rounded-t-lg bg-slate-100 border border-slate-200">
                <div className="grid grid-cols-12 gap-3 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  <div className="col-span-4">Item Description</div>
                  <div className="col-span-2 text-center">Qty</div>
                  <div className="col-span-3 text-center">U. Price / Cost</div>
                  <div className="col-span-3 text-right">Amount</div>
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-0 border-x border-b border-slate-200 rounded-b-lg overflow-hidden">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-12 gap-3 px-4 py-3 border-b last:border-b-0 hover:bg-slate-50 transition-colors"
                  >
                    <div className="col-span-4 flex items-center text-sm font-semibold text-slate-700">{item.desc}</div>

                    {/* Qty */}
                    <div className="col-span-2">
                      <Input
                        type="number"
                        value={item.qty}
                        onChange={(e) => {
                          const qty = Number.parseFloat(e.target.value) || 0
                          const price = Number.parseFloat(item.price) || 0
                          const amount = qty * price
                          updateItem(i, "qty", qty.toString())
                          updateItem(i, "amount", amount ? amount.toFixed(2) : "")
                        }}
                        placeholder="0"
                        className="text-center h-9"
                      />
                    </div>

                    {/* Price */}
                    <div className="col-span-3">
                      <Input
                        type="number"
                        value={item.price}
                        onChange={(e) => {
                          const price = Number.parseFloat(e.target.value) || 0
                          const qty = Number.parseFloat(item.qty) || 0
                          const amount = qty * price
                          updateItem(i, "price", price.toString())
                          updateItem(i, "amount", amount ? amount.toFixed(2) : "")
                        }}
                        placeholder="0.00"
                        className="text-center h-9"
                      />
                    </div>

                    {/* Amount (Read-only) */}
                    <div className="col-span-3">
                      <Input
                        type="text"
                        value={
                          item.amount
                            ? Number.parseFloat(item.amount).toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })
                            : ""
                        }
                        readOnly
                        placeholder="0.00"
                        className="text-right bg-slate-50 cursor-not-allowed font-semibold tabular-nums h-9"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-8" />

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">Total Summary</h3>

              <div className="rounded-lg border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 space-y-4">
                {Object.entries(totals).map(([key, value]) => {
                  const formattedValue =
                    value && !isNaN(Number(value))
                      ? Number.parseFloat(value).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : value || ""

                  const isTotal = key === "totalDue"

                  return (
                    <div key={key} className="space-y-2">
                      <Label
                        className={cn(
                          "text-xs font-semibold uppercase tracking-wide",
                          isTotal ? "text-slate-900" : "text-slate-600",
                        )}
                      >
                        {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                      </Label>

                      <Input
                        type="text"
                        defaultValue={formattedValue}
                        className={cn(
                          "text-right font-semibold tabular-nums transition-all focus:ring-2 focus:ring-slate-400",
                          isTotal ? "bg-slate-700 text-white text-lg border-slate-700" : "bg-white",
                        )}
                        onFocus={(e) => {
                          e.target.value = value ? value.replace(/,/g, "") : ""
                        }}
                        onChange={(e) => {
                          const inputValue = e.target.value.replace(/,/g, "")
                          if (!isNaN(Number(inputValue))) {
                            useInvoiceStore.setState((state) => ({
                              totals: {
                                ...state.totals,
                                [key]: inputValue,
                              },
                            }))
                          }
                        }}
                        onBlur={(e) => {
                          const num = Number.parseFloat(e.target.value)
                          if (!isNaN(num)) {
                            const formatted = num.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                            e.target.value = formatted
                            useInvoiceStore.setState((state) => ({
                              totals: {
                                ...state.totals,
                                [key]: formatted,
                              },
                            }))
                          }
                        }}
                      />
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 pt-6 sm:flex-row sm:justify-between">
              <Button
                variant="outline"
                onClick={clearAll}
                className="w-full sm:w-auto border-slate-300 hover:bg-slate-100 transition-colors bg-transparent"
              >
                <Eraser className="mr-2 h-4 w-4" />
                Clear
              </Button>
              <Button
                onClick={handlePreview}
                className="w-full sm:w-auto transition-colors"
              >
                <PrinterCheck className="mr-2 h-4 w-4" />
                Preview Invoice
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
