"use client";

import React from "react";
import { useInvoiceStore } from "../lib/invoiceStore";
const InvoicePrint = () => {
  const { date, name, tin, business, items, totals } = useInvoiceStore();

  return (
    <div
      className="relative w-[850px] h-[1100px] mx-auto"
      style={{
        backgroundImage: "url('/invoice-template3.jpg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
      }}
    >
      {/* Date */}
      <div className="absolute" style={{ top: "190px", right: "170px" }}>
        {date ? new Date(date).toLocaleDateString() : ""}
      </div>

      {/* Sold To */}
      <div className="absolute font-semibold" style={{ top: "250px", left: "500px" }}>
        {name || ""}
      </div>

      {/* TIN */}
      <div className="absolute" style={{ top: "275px", left: "500px" }}>
        {tin || ""}
      </div>

      {/* Business Address */}
      <div
        className="absolute w-[250px] leading-tight break-words"
        style={{ top: "295px", left: "500px", whiteSpace: "pre-line" }}
      >
        {business || ""}
      </div>

      {/* Diesel */}
      <div className="absolute" style={{ top: "390px", left: "460px" }}>
        {items[0]?.qty || ""}
      </div>
      <div className="absolute" style={{ top: "390px", left: "540px" }}>
        {items[0]?.price || ""}
      </div>
      <div className="absolute text-right w-[120px]" style={{ top: "390px", left: "610px" }}>
        {items[0]?.amount || ""}
      </div>

      {/* Unleaded */}
      <div className="absolute" style={{ top: "410px", left: "460px" }}>
        {items[1]?.qty || ""}
      </div>
      <div className="absolute" style={{ top: "410px", left: "540px" }}>
        {items[1]?.price || ""}
      </div>
      <div className="absolute text-right w-[120px]" style={{ top: "410px", left: "610px" }}>
        {items[1]?.amount || ""}
      </div>

      {/* Premium */}
      <div className="absolute" style={{ top: "430px", left: "460px" }}>
        {items[2]?.qty || ""}
      </div>
      <div className="absolute" style={{ top: "430px", left: "540px" }}>
        {items[2]?.price || ""}
      </div>
      <div className="absolute text-right w-[120px]" style={{ top: "430px", left: "610px" }}>
        {items[2]?.amount || ""}
      </div>

      {/* Totals */}
      <div className="absolute text-right w-[120px]" style={{ top: "530px", left: "610px" }}>
        {totals.totalSales || ""}
      </div>
      <div className="absolute text-right w-[120px]" style={{ top: "550px", left: "610px" }}>
        {totals.netVat || ""}
      </div>
      <div className="absolute text-right w-[120px]" style={{ top: "570px", left: "610px" }}>
        {totals.addVat || ""}
      </div>
      <div className="absolute text-right w-[120px]" style={{ top: "590px", left: "610px" }}>
        {totals.totalDue || ""}
      </div>
    </div>
  );
};

export default InvoicePrint;
