// "use client"

// import { useState } from "react"
// import { useInvoiceStore } from "@/lib/invoiceStore"
// import { Button } from "@/components/ui/button"
// import { format } from "date-fns"

// export default function PrintInvoicePage() {
//   const { date, name, tin, business, items, totals } = useInvoiceStore()
//   const [showTemplate, setShowTemplate] = useState(true)

//   const handlePrint = () => window.print()

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-lg font-semibold mb-2">Invoice Print Preview</h1>
//       <p className="text-sm mb-4 text-gray-600">
//         (The invoice background will not be printed)
//       </p>

//       {/* ========= INVOICE PREVIEW AREA ========= */}
//       <div
//         className="relative shadow-lg border bg-white"
//         style={{
//           width: "10.4cm",
//           height: "14.7cm",
//           fontSize: "10px",
//           position: "relative",
//         }}
//       >
//         {/* Background layer */}
//         {showTemplate && (
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               backgroundImage: `url("/invoice-template.jpg")`,
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//               opacity: 0.3, // 👈 Fade strength
//               zIndex: 0,
//             }}
//           />
//         )}

//         {/* Foreground text layer */}
//         <div style={{ position: "relative", zIndex: 1 }}>
//           {/* ======= DATE ======= */}
//           <div
//             className="absolute font-extrabold text-[12px]"
//             style={{ top: "31mm", left: "65mm" }}
//           >
//             <p>{date ? format(new Date(date), "MMMM dd, yyyy") : ""}</p>
//           </div>

//           {/* ======= SOLD TO SECTION ======= */}
//           <div
//             className="absolute font-extrabold text-[12px]"
//             style={{
//               top: "42mm",
//               left: "40mm",
//               width: "75mm",
//               lineHeight: "5mm",
//             }}
//           >
//             <div>{name}</div>
//             <div>{tin}</div>
//             <div>{business}</div>
//           </div>

//           {/* ======= ITEMS ======= */}
//           <div
//             className="absolute font-extrabold"
//             style={{ top: "66mm", left: "10mm", width: "85mm" }}
//           >
//             {items.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex text-[9px]"
//                 style={{ marginBottom: "0.5mm" }}
//               >
//                 <div style={{ width: "50mm", textAlign: "right" }}>{item.qty}</div>
//                 <div style={{ width: "15mm", textAlign: "right" }}>{item.price}</div>
//                 <div style={{ width: "22mm", textAlign: "right" }}>{item.amount}</div>
//               </div>
//             ))}
//           </div>

//           {/* ======= TOTALS ======= */}
//           <div
//             className="absolute font-extrabold"
//             style={{
//               bottom: "25mm",
//               right: "8mm",
//               width: "58mm",
//               fontSize: "9px",
//               lineHeight: "4.5mm",
//             }}
//           >
//             <div className="flex justify-between">
//               <span>Test</span>
//               <span>{totals.totalSales}</span>
//             </div>
//             <div className="flex justify-between">
//               <span></span>
//               <span>{totals.lessVat}</span>
//             </div>
//             <div className="flex justify-between">
//               <span></span>
//               <span>{totals.netVat}</span>
//             </div>
//             <div className="flex justify-between">
//               <span></span>
//               <span>{totals.discount}</span>
//             </div>
//             <div className="flex justify-between">
//               <span></span>
//               <span>{totals.addVat}</span>
//             </div>
//             <div className="flex justify-between">
//               <span></span>
//               <span>{totals.withholding}</span>
//             </div>
//             <div className="flex justify-between font-bold">
//               <span></span>
//               <span>{totals.totalDue}</span>
//             </div>
//           </div>
//         </div>

//         {/* PRINT STYLE */}
//         <style jsx global>{`
//           @page {
//             size: 10.4cm 14.7cm;
//             margin: 0;
//           }
//           @media print {
//             body {
//               margin: 0;
//             }
//             button,
//             h1,
//             p {
//               display: none;
//             }
//             div[style*='background-image'] {
//               background: none !important;
//             }
//           }
//         `}</style>
//       </div>

//       {/* ========= CONTROLS ========= */}
//       <div className="flex gap-2 mt-4">
//         <Button onClick={() => setShowTemplate(!showTemplate)} variant="outline">
//           {showTemplate ? "🙈 Hide Template" : "👁️ Show Template"}
//         </Button>

//         <Button onClick={handlePrint} className="ml-2">
//           🖨️ Print Now
//         </Button>
//       </div>
//     </div>
//   )
// }

// "use client";

// import { useInvoiceStore } from "@/lib/invoiceStore";
// import { Button } from "@/components/ui/button";
// import { format } from "date-fns";
// import { Printer } from "lucide-react";

// export default function PrintInvoicePage() {
//   const { date, name, tin, business, items, totals } = useInvoiceStore();

//   const handlePrint = () => window.print();

//   return (
//     <div className="flex flex-col font-extrabold items-center p-4 bg-gray-100 min-h-screen">
//       {/* <h1 className="text-lg font-bold mb-2">Invoice Print Preview</h1>
//       <p className="text-sm mb-4 text-gray-600">
//         (The invoice background will not be printed)
//       </p> */}

//       {/* <div
//         className="relative"
//         style={{
//           width: "10.4cm",
//           height: "14.7cm",
//           fontSize: "10px",
//           position: "relative",
//           backgroundImage: `url("/invoice-template2.jpg")`, // 👈 place file in /public
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       > */}
//       <div
//         className="relative shadow-lg border bg-white invoice-print"
//         style={{
//           width: "8.5in",
//           height: "11in",
//           position: "relative",
//           backgroundImage: `url("/invoice-template4.jpg")`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* =========== PRINT STYLE =========== */}
//         <style jsx global>{`
//           @page {
//             size: Letter;
//             margin: 0;
//           }

//           @media print {
//             body {
//               margin: 0;
//               -webkit-print-color-adjust: exact;
//               print-color-adjust: exact;
//             }

//             .invoice-print {
//               transform: none;
//             }
//           }
//         `}</style>

//         {/* ======= DATE ======= */}
//         <div
//           className="absolute text-[12px]"
//           style={{ top: "161.4mm", left: "173mm" }}
//         >
//           <span>{date ? format(new Date(date), "MMMM dd, yyyy") : ""}</span>
//         </div>

//         {/* ======= SOLD TO SECTION ======= */}
//         <div
//           className="absolute text-[12px]"
//           style={{
//             top: "172.5mm",
//             left: "150mm",
//             width: "75mm",
//             lineHeight: "4.8mm",
//           }}
//         >
//           <div>{name}</div>
//           <div>{tin}</div>
//           {/* split on newline and render each line */}

//           {(business || "").split(/\r?\n/).map((line, idx) => (
//             <div key={idx} className="m-0 p-0 leading-[4mm]">
//               {line}
//             </div>
//           ))}
//         </div>

//         {/* ======= ITEMS ======= */}
//         <div
//           className="absolute text-[12px] "
//           style={{ top: "195.5mm", left: "160mm", width: "85mm" }}
//         >
//           {items.map((item, i) => (
//             <div
//               key={i}
//               className="flex font-extrabold text-[9px]"
//               style={{ marginBottom: "0.5mm" }}
//             >
//               <div style={{ width: "10mm", textAlign: "right" }}>
//                 {item.qty}
//               </div>
//               <div style={{ width: "13mm", textAlign: "right" }}>
//                 {item.price}
//               </div>
//               <div style={{ width: "20mm", textAlign: "right" }}>
//                 {item.amount}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ======= TOTALS ======= */}
//         <div
//           className="absolute font-extrabold text-[9px]"
//           style={{
//             bottom: "20.3mm",
//             right: "14mm",
//             top: "225.5mm",
//             left: "167mm",
//             width: "60mm",
//             fontSize: "9px",
//             lineHeight: "4.3mm",
//           }}
//         >
//           <div className="flex justify-center">
//             <span></span>
//             <span className="text-white">{totals.totalSales || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span></span>
//             <span className="text-white">{totals.lessVat || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span></span>
//             <span>{totals.netVat || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span></span>
//             <span className="text-white">{totals.discount || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span></span>
//             <span>{totals.addVat || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span></span>
//             <span className="text-white">{totals.withholding || "n/a"}</span>
//           </div>
//           <div className="flex justify-center font-extrabold">
//             <span></span>
//             <span >{totals.totalDue || "n/a"}</span>
//           </div>
//         </div>
//       </div>
//       {/*
//       <Button onClick={handlePrint} className="mt-4">
//         <Printer />
//         Print Now
//       </Button> */}
//     </div>
//   );
// }

// "use client";

// import { useInvoiceStore } from "@/lib/invoiceStore";
// import { format } from "date-fns";

// export default function PrintInvoicePage() {
//   const { date, name, tin, business, items, totals } = useInvoiceStore();

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen font-extrabold">
//       {/* Full-page container (Letter size) */}
//       <div
//         className="relative invoice-print full-page"
//         style={{
//           width: "8.5in",
//           height: "11in",
//           position: "relative",
//           backgroundImage: `url("/invoice-template3.jpg")`, // scanned full letter background
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "contain",
//           backgroundPosition: "right bottom", // anchor to bottom-right of page
//         }}
//       >
//         {/* =========== PRINT CSS =========== */}
//         <style jsx global>{`
//           @page {
//             size: Letter;
//             margin: 0;
//           }

//           html,
//           body {
//             margin: 0;
//             padding: 0;
//             height: 100%;
//           }

//           @media print {
//             body {
//               margin: 0;
//               -webkit-print-color-adjust: exact;
//               print-color-adjust: exact;
//             }

//             /* Hide any buttons/text outside invoice */
//             button,
//             h1,
//             p {
//               display: none !important;
//             }

//             /* Make sure invoice stays locked to printed page */
//             .invoice-print.full-page {
//               position: fixed !important;
//               top: 0;
//               left: 0;
//               width: 8.5in !important;
//               height: 11in !important;
//               overflow: visible;
//             }
//           }
//         `}</style>

//         {/* ======= DATE ======= */}
//         <div
//           className="absolute text-[12px]"
//           style={{ top: "161.4mm", left: "173mm" }}
//         >
//           <span>{date ? format(new Date(date), "MMMM dd, yyyy") : ""}</span>
//         </div>

//         {/* ======= SOLD TO SECTION ======= */}
//         <div
//           className="absolute text-[12px]"
//           style={{
//             top: "172.5mm",
//             left: "150mm",
//             width: "75mm",
//             lineHeight: "4.8mm",
//           }}
//         >
//           <div>{name}</div>
//           <div>{tin}</div>

//           {(business || "").split(/\r?\n/).map((line, idx) => (
//             <div key={idx} className="m-0 p-0 leading-[4mm]">
//               {line}
//             </div>
//           ))}
//         </div>

//         {/* ======= ITEMS ======= */}
//         <div
//           className="absolute text-[12px]"
//           style={{ top: "195.5mm", left: "160mm", width: "85mm" }}
//         >
//           {items.map((item, i) => (
//             <div
//               key={i}
//               className="flex font-extrabold text-[9px]"
//               style={{ marginBottom: "0.5mm" }}
//             >
//               <div style={{ width: "10mm", textAlign: "right" }}>
//                 {item.qty}
//               </div>
//               <div style={{ width: "13mm", textAlign: "right" }}>
//                 {item.price}
//               </div>
//               <div style={{ width: "20mm", textAlign: "right" }}>
//                 {item.amount}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ======= TOTALS ======= */}
//         <div
//           className="absolute font-extrabold text-[9px]"
//           style={{
//             top: "225.5mm",
//             left: "167mm",
//             width: "60mm",
//             fontSize: "9px",
//             lineHeight: "4.3mm",
//           }}
//         >
//           <div className="flex justify-center">
//             <span className="text-white">{totals.totalSales || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span className="text-white">{totals.lessVat || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span>{totals.netVat || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span className="text-white">{totals.discount || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span>{totals.addVat || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span className="text-white">{totals.withholding || "n/a"}</span>
//           </div>
//           <div className="flex justify-center font-extrabold">
//             <span>{totals.totalDue || "n/a"}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react"; // ✅ added
// import { useInvoiceStore } from "@/lib/invoiceStore";
// import { format } from "date-fns";

// export default function PrintInvoicePage() {
//   const { date, name, tin, business, items, totals } = useInvoiceStore();
//   const [rotated, setRotated] = useState(false); // ✅ added state

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen font-extrabold">
//       {/* ✅ Rotate Button */}
//       <button
//         onClick={() => setRotated((prev) => !prev)}
//         className="mb-3 px-3 py-1 bg-blue-600 text-white rounded no-print"
//       >
//         {rotated ? "Unrotate" : "Rotate 180°"}
//       </button>

//       {/* Full-page container (Letter size) */}
//       <div
//         className="relative invoice-print full-page"
//         style={{
//           width: "8.5in",
//           height: "11in",
//           position: "relative",
//           backgroundImage: `url("/invoice-template3.jpg")`, // scanned full letter background
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "contain",
//           backgroundPosition: "right bottom", // anchor to bottom-right of page
//           transform: rotated ? "rotate(180deg)" : "none", // ✅ apply rotation
//           transformOrigin: "center center", // ✅ rotate around page center
//         }}
//       >
//         {/* =========== PRINT CSS =========== */}
//         <style jsx global>{`
//           @page {
//             size: Letter;
//             margin: 0;
//           }

//           html,
//           body {
//             margin: 0;
//             padding: 0;
//             height: 100%;
//           }

//           @media print {
//             body {
//               margin: 0;
//               -webkit-print-color-adjust: exact;
//               print-color-adjust: exact;
//             }

//             /* Hide any buttons/text outside invoice */
//             button,
//             h1,
//             p {
//               display: none !important;
//             }

//             /* Make sure invoice stays locked to printed page */
//             .invoice-print.full-page {
//               position: fixed !important;
//               top: 0;
//               left: 0;
//               width: 8.5in !important;
//               height: 11in !important;
//               overflow: visible;
//             }
//           }
//         `}</style>

//         {/* ======= DATE ======= */}
//         <div
//           className="absolute text-[12px]"
//           style={{ top: "161.4mm", left: "173mm" }}
//         >
//           <span>{date ? format(new Date(date), "MMMM dd, yyyy") : ""}</span>
//         </div>

//         {/* ======= SOLD TO SECTION ======= */}
//         <div
//           className="absolute text-[12px]"
//           style={{
//             top: "172.5mm",
//             left: "150mm",
//             width: "75mm",
//             lineHeight: "4.8mm",
//           }}
//         >
//           <div>{name}</div>
//           <div>{tin}</div>

//           {(business || "").split(/\r?\n/).map((line, idx) => (
//             <div key={idx} className="m-0 p-0 leading-[4mm]">
//               {line}
//             </div>
//           ))}
//         </div>

//         {/* ======= ITEMS ======= */}
//         <div
//           className="absolute text-[12px]"
//           style={{ top: "195.5mm", left: "160mm", width: "85mm" }}
//         >
//           {items.map((item, i) => (
//             <div
//               key={i}
//               className="flex font-extrabold text-[9px]"
//               style={{ marginBottom: "0.5mm" }}
//             >
//               <div style={{ width: "10mm", textAlign: "right" }}>
//                 {item.qty}
//               </div>
//               <div style={{ width: "13mm", textAlign: "right" }}>
//                 {item.price}
//               </div>
//               <div style={{ width: "20mm", textAlign: "right" }}>
//                 {item.amount}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ======= TOTALS ======= */}
//         <div
//           className="absolute font-extrabold text-[9px]"
//           style={{
//             top: "225.5mm",
//             left: "167mm",
//             width: "60mm",
//             fontSize: "9px",
//             lineHeight: "4.3mm",
//           }}
//         >
//           <div className="flex justify-center">
//             <span className="text-white">{totals.totalSales || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span className="text-white">{totals.lessVat || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span>{totals.netVat || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span className="text-white">{totals.discount || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span>{totals.addVat || "n/a"}</span>
//           </div>
//           <div className="flex justify-center">
//             <span className="text-white">{totals.withholding || "n/a"}</span>
//           </div>
//           <div className="flex justify-center font-extrabold">
//             <span>{totals.totalDue || "n/a"}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react"; // ✅ added
import { useInvoiceStore } from "@/lib/invoiceStore";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, RotateCcw } from "lucide-react";

export default function PrintInvoicePage() {
  const { date, name, tin, business, items, totals } = useInvoiceStore();

  const [rotated, setRotated] = useState(false); // for rotate button (already added before)
  const [showBg, setShowBg] = useState(true); // ✅ for hide/unhide background

  return (
    <div className="flex flex-col items-center p-4 min-h-screen font-extrabold">
      {/* ✅ Control Buttons */}
      <div className="flex gap-2 mb-3 no-print">
        <Button
          onClick={() => setRotated((prev) => !prev)}
          className="px-3 py-1"
          variant="outline"
        >
          <RotateCcw />
          {rotated ? "Unrotate" : "Rotate 180°"}
        </Button>

        <Button
          onClick={() => setShowBg((prev) => !prev)}
          className="px-3 py-1"
        >
          {showBg ? <EyeOff /> : <Eye />}
          {showBg ? "Hide Picture" : "Show Picture"}
        </Button>
      </div>

      {/* Full-page container (Letter size) */}
      <div
        className="relative invoice-print full-page"
        style={{
          width: "8.5in",
          height: "11in",
          position: "relative",
          backgroundImage: showBg ? `url("/invoice-template4.jpg")` : "none", // ✅ toggle background
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "right bottom",
          transform: rotated ? "rotate(180deg)" : "none",
          transformOrigin: "center center",
        }}
      >
        {/* =========== PRINT CSS =========== */}
        <style jsx global>{`
          @page {
            size: Letter;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            height: 100%;
          }

          @media print {
            body {
              margin: 0;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }

            /* Hide any buttons/text outside invoice */
            button,
            h1,
            p {
              display: none !important;
            }

            .invoice-print.full-page {
              position: fixed !important;
              top: 0;
              left: 0;
              width: 8.5in !important;
              height: 11in !important;
              overflow: visible;
            }
          }
        `}</style>

        {/* ======= DATE ======= */}
        <div
          className="absolute text-[12px]"
          style={{ top: "158mm", left: "173mm" }}
        >
          <span>{date ? format(new Date(date), "MMMM dd, yyyy") : ""}</span>
        </div>

        {/* ======= SOLD TO SECTION ======= */}
        <div
          className="absolute text-[12px]"
          style={{
            top: "169.5mm",
            left: "155mm",
            width: "75mm",
            lineHeight: "4.8mm",
          }}
        >
          <div>{name}</div>
          <div>{tin}</div>

          {(business || "").split(/\r?\n/).map((line, idx) => (
            <div key={idx} className="m-0 p-0 leading-[4mm]">
              {line}
            </div>
          ))}
        </div>

        {/* ======= ITEMS ======= */}
        <div
          className="absolute text-[12px]"
          style={{ top: "191.9mm", left: "163mm", width: "85mm" }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex font-extrabold text-[9px]"
              style={{ marginBottom: "0.5mm" }}
            >
              <div style={{ width: "10mm", textAlign: "right" }}>
                {item.qty}
              </div>
              <div style={{ width: "13mm", textAlign: "right" }}>
                {item.price}
              </div>
              <div style={{ width: "20mm", textAlign: "right" }}>
                {item.amount}
              </div>
            </div>
          ))}
        </div>

        {/* ======= TOTALS ======= */}
        <div
          className="absolute font-extrabold text-[9px]"
          style={{
            top: "221.5mm",
            left: "171mm",
            width: "60mm",
            fontSize: "9px",
            lineHeight: "4.3mm",
          }}
        >
          <div className="flex justify-center">
            <span className="text-white">{totals.totalSales || "n/a"}</span>
          </div>
          <div className="flex justify-center">
            <span className="text-white">{totals.lessVat || "n/a"}</span>
          </div>
          <div className="flex justify-center">
            <span>{totals.netVat || "n/a"}</span>
          </div>
          <div className="flex justify-center">
            <span className="text-white">{totals.discount || "n/a"}</span>
          </div>
          <div className="flex justify-center">
            <span>{totals.addVat || "n/a"}</span>
          </div>
          <div className="flex justify-center">
            <span>{totals.withholding || "n/a"}</span>
          </div>
          <div className="flex justify-center font-extrabold">
            <span>{totals.totalDue || "n/a"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
