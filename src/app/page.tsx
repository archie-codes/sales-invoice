// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";

// export default function InvoiceForm() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     date: "",
//     name: "",
//     tin: "",
//     business: "",
//     dieselQty: "",
//     dieselPrice: "",
//     dieselAmount: "",
//     unleadedQty: "",
//     unleadedPrice: "",
//     unleadedAmount: "",
//     premiumQty: "",
//     premiumPrice: "",
//     premiumAmount: "",
//     totalSales: "",
//     lessVat: "",
//     netVat: "",
//     lessDiscount: "",
//     addVat: "",
//     lessWithholding: "",
//     totalDue: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handlePrint = () => {
//     const params = new URLSearchParams(form).toString();
//     router.push(`/print?${params}`);
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 space-y-6">
//       <h1 className="text-xl font-semibold text-center">Sales Invoice Input</h1>

//       {/* Header Fields */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-1">
//           <Label>Date</Label>
//           <Input type="date" name="date" value={form.date} onChange={handleChange} />
//         </div>
//         <div className="space-y-1">
//           <Label>Registered Name</Label>
//           <Input name="name" value={form.name} onChange={handleChange} />
//         </div>
//         <div className="space-y-1">
//           <Label>TIN</Label>
//           <Input name="tin" value={form.tin} onChange={handleChange} />
//         </div>
//         <div className="space-y-1">
//           <Label>Business Address</Label>
//           <Input name="business" value={form.business} onChange={handleChange} />
//         </div>
//       </div>

//       {/* Divider */}
//       <hr className="my-4 border-gray-300" />

//       {/* Table Header */}
//       <div className="grid grid-cols-4 text-sm font-semibold border-b border-gray-400 pb-1">
//         <div>Item Description</div>
//         <div className="text-center">Qty</div>
//         <div className="text-center">U. Price / Cost</div>
//         <div className="text-center">Amount</div>
//       </div>

//       {/* Diesel */}
//       <div className="grid grid-cols-4 gap-2 items-center">
//         <Label className="text-sm">Ltrs. DIESEL</Label>
//         <Input
//           name="dieselQty"
//           value={form.dieselQty}
//           onChange={handleChange}
//           placeholder="Qty"
//         />
//         <Input
//           name="dieselPrice"
//           value={form.dieselPrice}
//           onChange={handleChange}
//           placeholder="Price"
//         />
//         <Input
//           name="dieselAmount"
//           value={form.dieselAmount}
//           onChange={handleChange}
//           placeholder="Amount"
//         />
//       </div>

//       {/* Unleaded */}
//       <div className="grid grid-cols-4 gap-2 items-center">
//         <Label className="text-sm">Ltrs. UNLEADED</Label>
//         <Input
//           name="unleadedQty"
//           value={form.unleadedQty}
//           onChange={handleChange}
//           placeholder="Qty"
//         />
//         <Input
//           name="unleadedPrice"
//           value={form.unleadedPrice}
//           onChange={handleChange}
//           placeholder="Price"
//         />
//         <Input
//           name="unleadedAmount"
//           value={form.unleadedAmount}
//           onChange={handleChange}
//           placeholder="Amount"
//         />
//       </div>

//       {/* Premium */}
//       <div className="grid grid-cols-4 gap-2 items-center">
//         <Label className="text-sm">Ltrs. PREMIUM</Label>
//         <Input
//           name="premiumQty"
//           value={form.premiumQty}
//           onChange={handleChange}
//           placeholder="Qty"
//         />
//         <Input
//           name="premiumPrice"
//           value={form.premiumPrice}
//           onChange={handleChange}
//           placeholder="Price"
//         />
//         <Input
//           name="premiumAmount"
//           value={form.premiumAmount}
//           onChange={handleChange}
//           placeholder="Amount"
//         />
//       </div>

//       <hr className="my-4 border-gray-300" />

//       {/* Totals Section */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-1">
//           <Label>Total Sales</Label>
//           <Input name="totalSales" value={form.totalSales} onChange={handleChange} />
//         </div>
//         <div className="space-y-1">
//           <Label>Less: VAT</Label>
//           <Input name="lessVat" value={form.lessVat} onChange={handleChange} />
//         </div>
//         <div className="space-y-1">
//           <Label>Amount Net of VAT</Label>
//           <Input name="netVat" value={form.netVat} onChange={handleChange} />
//         </div>
//         <div className="space-y-1">
//           <Label>Less: Discount</Label>
//           <Input name="lessDiscount" value={form.lessDiscount} onChange={handleChange} />
//         </div>
//         <div className="space-y-1">
//           <Label>Add: VAT</Label>
//           <Input name="addVat" value={form.addVat} onChange={handleChange} />
//         </div>
//         <div className="space-y-1">
//           <Label>Less: Withholding Tax</Label>
//           <Input
//             name="lessWithholding"
//             value={form.lessWithholding}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="col-span-2 space-y-1">
//           <Label className="font-bold">TOTAL AMOUNT DUE</Label>
//           <Input
//             className="font-semibold text-lg"
//             name="totalDue"
//             value={form.totalDue}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       <div className="text-center pt-6">
//         <Button onClick={handlePrint}>Print Invoice</Button>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { CalendarIcon } from "lucide-react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Calendar } from "@/components/ui/calendar";
// import { format } from "date-fns";
// import { useInvoiceStore } from "@/lib/invoiceStore";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// export default function InvoiceInputPage() {
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

//   return (
//     <div className="max-w-2xl mx-auto p-4 space-y-4">
//       <h1 className="text-xl font-bold mb-4">🧾 Invoice Input</h1>

//       {/* Header fields */}
//       <div className="space-y-2">
//         {/* Date Field */}
//         <div className="flex flex-col space-y-2">
//           <Label>Date</Label>
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
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
//                   }
//                 }}
//                 initialFocus
//               />
//             </PopoverContent>
//           </Popover>
//         </div>
//         <div>
//           <Label>Registered Name</Label>
//           <Input
//             value={name}
//             onChange={(e) => setField("name", e.target.value)}
//           />
//         </div>
//         <div>
//           <Label>TIN</Label>
//           <Input
//             value={tin}
//             onChange={(e) => setField("tin", e.target.value)}
//           />
//         </div>
//         <div>
//           <Label>Business Address</Label>
//           <Input
//             value={business}
//             onChange={(e) => setField("business", e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Items Section */}
//       <div className="mt-6 space-y-3">
//         {/* Table Header */}
//         <div className="flex font-medium text-sm border-b pb-1 mb-1">
//           <div className="w-1/4">Item Description</div>
//           <div className="w-1/4 text-center">Qty</div>
//           <div className="w-1/4 text-center">U.Price / Cost</div>
//           <div className="w-1/4 text-center">Amount</div>
//         </div>

//         {/* Table Rows */}
//         {items.map((item, i) => (
//           <div key={i} className="flex items-center gap-2 py-1 border-b">
//             {/* Description */}
//             <div className="w-1/4 text-sm font-medium">{item.desc}</div>

//             {/* Quantity */}
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

//             {/* Unit Price */}
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
//                 placeholder="U.Price"
//                 className="text-center"
//               />
//             </div>

//             {/* Amount */}
//             <div className="w-1/4">
//               <Input
//                 type="number"
//                 value={item.amount}
//                 onChange={(e) => updateItem(i, "amount", e.target.value)}
//                 placeholder="Amount"
//                 className="text-center"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Totals */}
//       <div className="mt-4 space-y-2">
//         {Object.keys(totals).map((key) => (
//           <div key={key}>
//             <Label>{key.replace(/([A-Z])/g, " $1")}</Label>
//             <Input
//               value={totals[key as keyof typeof totals]}
//               onChange={(e) =>
//                 setTotal(key as keyof typeof totals, e.target.value)
//               }
//             />
//           </div>
//         ))}
//       </div>

//       {/* Button to go to preview */}
//       <Link href="/print">
//         <Button className="mt-4 w-full">🖨️ Preview Invoice</Button>
//       </Link>
//     </div>
//   );
// }

"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Eraser, PrinterCheck } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns";
import { useInvoiceStore } from "@/lib/invoiceStore";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InvoiceInputPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false); // 👈 control popover state

  const {
    date,
    name,
    tin,
    business,
    items,
    totals,
    setField,
    updateItem,
    setTotal,
  } = useInvoiceStore();

  const handlePreview = () => {
    router.push("/print"); // ✅ navigate to print preview
  };

  return (
    <div className="max-w-2xl mx-auto mt-5 mb-5 p-4 rounded-2xl border-2 border-gray-300 space-y-4 shadow-2xl">
      <h1 className="text-xl font-bold mb-4 text-center">SALES INVOICE</h1>
      <hr />
      {/* Header fields */}
      <div className="space-y-2">
        {/* Date Field */}
        <div className="flex flex-col space-y-1">
          <Label>Date</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                onClick={() => setOpen(true)}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? (
                  format(new Date(date), "MMMM dd, yyyy")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date ? new Date(date) : undefined}
                onSelect={(selectedDate) => {
                  if (selectedDate) {
                    setField("date", selectedDate.toISOString());
                    setOpen(false); // 👈 automatically close popover
                  }
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Name */}
        <div className="space-y-1">
          <Label>Registered Name</Label>
          <Input
            value={name}
            onChange={(e) => setField("name", e.target.value)}
            placeholder="Enter Business or Customer Name"
          />
        </div>

        {/* TIN */}
        <div className="space-y-1">
          <Label>TIN</Label>
          <Input
            value={tin}
            onChange={(e) => setField("tin", e.target.value)}
            placeholder="Enter TIN. eg. 123-456-789-000"
          />
        </div>

        {/* Business Address */}
        <div className="space-y-1">
          <Label>Business Address</Label>
          <Textarea
            value={business}
            onChange={(e) => setField("business", e.target.value)}
            placeholder="Enter Address. e.g. 1234 Main St, City, Country"
            className="resize-none"
            rows={2} // 👈 auto height for 2 lines
          />
        </div>
      </div>

      {/* Items Section */}
      <div className="mt-6 space-y-3">
        {/* Table Header */}
        <div className="flex font-medium text-sm border-b pb-1 mb-1">
          <div className="w-1/4">Item Description</div>
          <div className="w-1/4 text-center">Qty</div>
          <div className="w-1/4 text-center">U. Price / Cost</div>
          <div className="w-1/4 text-center">Amount</div>
        </div>

        {/* Table Rows */}
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 py-1 border-b">
            <div className="w-1/4 text-sm font-medium">{item.desc}</div>

            {/* Qty */}
            <div className="w-1/4">
              <Input
                type="number"
                value={item.qty}
                onChange={(e) => {
                  const qty = parseFloat(e.target.value) || 0;
                  const price = parseFloat(item.price) || 0;
                  const amount = qty * price;
                  updateItem(i, "qty", qty.toString());
                  updateItem(i, "amount", amount ? amount.toFixed(2) : "");
                }}
                placeholder="Qty"
                className="text-center"
              />
            </div>

            {/* Price */}
            <div className="w-1/4">
              <Input
                type="number"
                value={item.price}
                onChange={(e) => {
                  const price = parseFloat(e.target.value) || 0;
                  const qty = parseFloat(item.qty) || 0;
                  const amount = qty * price;
                  updateItem(i, "price", price.toString());
                  updateItem(i, "amount", amount ? amount.toFixed(2) : "");
                }}
                placeholder="U. Price"
                className="text-center"
              />
            </div>

            {/* Amount (Read-only) */}
            <div className="w-1/4">
              <Input
                type="text"
                value={
                  item.amount
                    ? parseFloat(item.amount).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : ""
                }
                readOnly
                placeholder="Amount"
                className="text-center bg-gray-50 cursor-not-allowed"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Totals Section */}
      <div className="mt-6 space-y-3">
        {Object.entries(totals).map(([key, value]) => {
          const formattedValue =
            value && !isNaN(Number(value))
              ? parseFloat(value).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : value || "";

          return (
            <div key={key} className="space-y-1">
              <Label className="capitalize font-semibold">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </Label>
              <Input
                type="text"
                value={formattedValue}
                disabled
                className="bg-gray-100 cursor-not-allowed text-right font-medium"
              />
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="pt-6 flex justify-between">
        <Button variant="outline" onClick={() => location.reload()}>
          <Eraser /> Clear
        </Button>
        <Button onClick={handlePreview} className="w-40">
          <PrinterCheck /> Preview Invoice
        </Button>
      </div>
    </div>
  );
}
