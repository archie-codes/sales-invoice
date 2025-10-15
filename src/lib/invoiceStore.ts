// import { create } from "zustand"

// interface Item {
//   desc: string
//   qty: string
//   price: string
//   amount: string
// }

// interface InvoiceState {
//   date: string
//   name: string
//   tin: string
//   business: string
//   items: Item[]
//   totals: {
//     totalSales: string
//     lessVat: string
//     netVat: string
//     discount: string
//     addVat: string
//     withholding: string
//     totalDue: string
//   }
//   setField: (key: keyof Omit<InvoiceState, "setField" | "items" | "totals">, value: string) => void
//   updateItem: (index: number, field: keyof Item, value: string) => void
//   setTotal: (key: keyof InvoiceState["totals"], value: string) => void
// }

// import { create } from "zustand"

// interface Item {
//   desc: string
//   qty: string
//   price: string
//   amount: string
// }

// interface InvoiceState {
//   date: string
//   name: string
//   tin: string
//   business: string
//   items: Item[]
//   totals: {
//     totalSales: string
//     lessVat: string
//     netVat: string
//     discount: string
//     addVat: string
//     withholding: string
//     totalDue: string
//   }
//   setField: (key: keyof Omit<InvoiceState, "setField" | "items" | "totals">, value: string) => void
//   updateItem: (index: number, field: keyof Item, value: string) => void
//   setTotal: (key: keyof InvoiceState["totals"], value: string) => void
// }

// export const useInvoiceStore = create<InvoiceState>((set, get) => ({
//   date: "",
//   name: "",
//   tin: "",
//   business: "",
//   items: [
//     { desc: "Ltrs. DIESEL", qty: "", price: "", amount: "" },
//     { desc: "Ltrs. UNLEADED", qty: "", price: "", amount: "" },
//     { desc: "Ltrs. PREMIUM", qty: "", price: "", amount: "" },
//   ],
//   totals: {
//     totalSales: "",
//     lessVat: "",
//     netVat: "",
//     discount: "",
//     addVat: "",
//     withholding: "",
//     totalDue: "",
//   },

//   setField: (key, value) => set((state) => ({ ...state, [key]: value })),

//   updateItem: (index, field, value) =>
//     set((state) => {
//       const items = [...state.items]
//       items[index][field] = value

//       // 👇 Automatically compute totalSales when any amount changes
//       if (field === "amount") {
//         const total = items.reduce(
//           (sum, item) => sum + (parseFloat(item.amount) || 0),
//           0
//         )

//         // 👇 Format like 639,000.00
//         const formattedTotal = total.toLocaleString("en-US", {
//           minimumFractionDigits: 2,
//           maximumFractionDigits: 2,
//         })

//         return {
//           ...state,
//           items,
//           totals: {
//             ...state.totals,
//             // totalSales: formattedTotal,
//             totalDue: formattedTotal,
//           },
//         }
//       }

//       return { ...state, items }
//     }),

//   setTotal: (key, value) =>
//     set((state) => ({ totals: { ...state.totals, [key]: value } })),
// }))


// export const useInvoiceStore = create<InvoiceState>((set) => ({
//   date: "",
//   name: "",
//   tin: "",
//   business: "",
//   items: [
//     { desc: "Ltrs. DIESEL", qty: "", price: "", amount: "" },
//     { desc: "Ltrs. UNLEADED", qty: "", price: "", amount: "" },
//     { desc: "Ltrs. PREMIUM", qty: "", price: "", amount: "" },
//   ],
//   totals: {
//     totalSales: "",
//     lessVat: "",
//     netVat: "",
//     discount: "",
//     addVat: "",
//     withholding: "",
//     totalDue: "",
//   },
//   setField: (key, value) => set((state) => ({ ...state, [key]: value })),
//   updateItem: (index, field, value) =>
//     set((state) => {
//       const items = [...state.items]
//       items[index][field] = value
//       return { ...state, items }
//     }),
//   setTotal: (key, value) =>
//     set((state) => ({ totals: { ...state.totals, [key]: value } })),
// }))


// import { create } from "zustand"
// import { persist } from "zustand/middleware"

// interface Item {
//   desc: string
//   qty: string
//   price: string
//   amount: string
// }

// interface InvoiceState {
//   date: string
//   name: string
//   tin: string
//   business: string
//   items: Item[]
//   totals: {
//     totalSales: string
//     lessVat: string
//     netVat: string
//     discount: string
//     addVat: string
//     withholding: string
//     totalDue: string
//   }
//   setField: (
//     key: keyof Omit<InvoiceState, "setField" | "items" | "totals">,
//     value: string
//   ) => void
//   updateItem: (index: number, field: keyof Item, value: string) => void
//   setTotal: (key: keyof InvoiceState["totals"], value: string) => void
// }

// export const useInvoiceStore = create<InvoiceState>()(
//   persist(
//     (set) => ({
//       date: "",
//       name: "",
//       tin: "",
//       business: "",
//       items: [
//         { desc: "Ltrs. DIESEL", qty: "", price: "", amount: "" },
//         { desc: "Ltrs. UNLEADED", qty: "", price: "", amount: "" },
//         { desc: "Ltrs. PREMIUM", qty: "", price: "", amount: "" },
//       ],
//       totals: {
//         totalSales: "",
//         lessVat: "",
//         netVat: "",
//         discount: "",
//         addVat: "",
//         withholding: "",
//         totalDue: "",
//       },

//       setField: (key, value) => set((state) => ({ ...state, [key]: value })),
//       updateItem: (index, field, value) =>
//         set((state) => {
//           const items = [...state.items]
//           items[index][field] = value
//           return { ...state, items }
//         }),
//       setTotal: (key, value) =>
//         set((state) => ({
//           totals: { ...state.totals, [key]: value },
//         })),
//     }),
//     {
//       name: "invoice-storage", // localStorage key
//       partialize: (state) => ({
//         date: state.date,
//         name: state.name,
//         tin: state.tin,
//         business: state.business,
//         items: state.items,
//         totals: state.totals,
//       }),
//     }
//   )
// // )
// import { create } from "zustand"

// interface Item {
//   desc: string
//   qty: string
//   price: string
//   amount: string
// }

// interface InvoiceState {
//   date: string
//   name: string
//   tin: string
//   business: string
//   items: Item[]
//   totals: {
//     totalSales: string
//     lessVat: string
//     netVat: string
//     discount: string
//     addVat: string
//     withholding: string
//     totalDue: string
//   }
//   setField: (
//     key: keyof Omit<InvoiceState, "setField" | "items" | "totals">,
//     value: string
//   ) => void
//   updateItem: (index: number, field: keyof Item, value: string) => void
//   setTotal: (key: keyof InvoiceState["totals"], value: string) => void
// }

// export const useInvoiceStore = create<InvoiceState>((set, get) => ({
//   date: "",
//   name: "",
//   tin: "",
//   business: "",
//   items: [
//     { desc: "Ltrs. DIESEL", qty: "", price: "", amount: "" },
//     { desc: "Ltrs. UNLEADED", qty: "", price: "", amount: "" },
//     { desc: "Ltrs. PREMIUM", qty: "", price: "", amount: "" },
//   ],
//   totals: {
//     totalSales: "",
//     lessVat: "",
//     netVat: "",
//     discount: "",
//     addVat: "",
//     withholding: "",
//     totalDue: "",
//   },

//   setField: (key, value) => set((state) => ({ ...state, [key]: value })),

//   updateItem: (index, field, value) =>
//     set((state) => {
//       const items = [...state.items]
//       items[index][field] = value

//       // 👇 Automatically compute totals when amount changes
//       if (field === "amount") {
//         const total = items.reduce(
//           (sum, item) => sum + (parseFloat(item.amount) || 0),
//           0
//         )

//         // Format totals like 639,000.00
//         const formattedTotal = total.toLocaleString("en-US", {
//           minimumFractionDigits: 2,
//           maximumFractionDigits: 2,
//         })

//         // ✅ Compute Net VAT and Add VAT
//         const netVatValue = total / 1.12
//         const addVatValue = total - netVatValue
//         const withholdingValue = netVatValue * 0.01

//         const formattedNetVat = netVatValue.toLocaleString("en-US", {
//           minimumFractionDigits: 2,
//           maximumFractionDigits: 2,
//         })
//         const formattedAddVat = addVatValue.toLocaleString("en-US", {
//           minimumFractionDigits: 2,
//           maximumFractionDigits: 2,
//         })

//         const formattedwithholdingValue = withholdingValue.toLocaleString("en-US", {
//           minimumFractionDigits: 2,
//           maximumFractionDigits: 2,
//         })

//         return {
//           ...state,
//           items,
//           totals: {
//             ...state.totals,
//             // totalSales: formattedTotal,
//             totalDue: formattedTotal,
//             netVat: formattedNetVat,
//             addVat: formattedAddVat,
//             withholding: formattedwithholdingValue,
//           },
//         }
//       }

//       return { ...state, items }
//     }),

//   setTotal: (key, value) =>
//     set((state) => {
//       const updatedTotals = { ...state.totals, [key]: value }

//       // ✅ Auto-update Net VAT & Add VAT if Total Due changes
//       if (key === "totalDue") {
//         const totalDue = parseFloat(value.replace(/,/g, "")) || 0
//         const netVatValue = totalDue / 1.12
//         const addVatValue = totalDue - netVatValue

//         updatedTotals.netVat = netVatValue.toLocaleString("en-US", {
//           minimumFractionDigits: 2,
//           maximumFractionDigits: 2,
//         })
//         updatedTotals.addVat = addVatValue.toLocaleString("en-US", {
//           minimumFractionDigits: 2,
//           maximumFractionDigits: 2,
//         })
//       }

//       return { totals: updatedTotals }
//     }),
// }))


import { create } from "zustand"

interface Item {
  desc: string
  qty: string
  price: string
  amount: string
}

interface InvoiceState {
  date: string
  name: string
  tin: string
  business: string
  items: Item[]
  totals: {
    totalSales: string
    lessVat: string
    netVat: string
    discount: string
    addVat: string
    withholding: string
    totalDue: string
  }
  setField: (key: keyof Omit<InvoiceState, "setField" | "items" | "totals" | "clearAll">, value: string) => void
  updateItem: (index: number, field: keyof Item, value: string) => void
  setTotal: (key: keyof InvoiceState["totals"], value: string) => void
  clearAll: () => void
}

const initialState = {
  date: "",
  name: "",
  tin: "",
  business: "",
  items: [
    { desc: "Ltrs. DIESEL", qty: "", price: "", amount: "" },
    { desc: "Ltrs. UNLEADED", qty: "", price: "", amount: "" },
    { desc: "Ltrs. PREMIUM", qty: "", price: "", amount: "" },
  ],
  totals: {
    totalSales: "",
    lessVat: "",
    netVat: "",
    discount: "",
    addVat: "",
    withholding: "",
    totalDue: "",
  },
}

export const useInvoiceStore = create<InvoiceState>((set, get) => ({
  ...initialState,

  setField: (key, value) => set((state) => ({ ...state, [key]: value })),

  updateItem: (index, field, value) =>
    set((state) => {
      const items = [...state.items]
      items[index][field] = value

      // Auto-compute totals when amount changes
      if (field === "amount") {
        const total = items.reduce((sum, item) => sum + (Number.parseFloat(item.amount) || 0), 0)

        // Format totals like 639,000.00
        const formattedTotal = total.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })

        // Compute Net VAT and Add VAT
        const netVatValue = total / 1.12
        const addVatValue = total - netVatValue
        const withholdingValue = netVatValue * 0.01

        const formattedNetVat = netVatValue.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
        const formattedAddVat = addVatValue.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })

        const formattedwithholdingValue = withholdingValue.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })

        return {
          ...state,
          items,
          totals: {
            ...state.totals,
            totalDue: formattedTotal,
            netVat: formattedNetVat,
            addVat: formattedAddVat,
            withholding: formattedwithholdingValue,
          },
        }
      }

      return { ...state, items }
    }),

  setTotal: (key, value) =>
    set((state) => {
      const updatedTotals = { ...state.totals, [key]: value }

      // Auto-update Net VAT & Add VAT if Total Due changes
      if (key === "totalDue") {
        const totalDue = Number.parseFloat(value.replace(/,/g, "")) || 0
        const netVatValue = totalDue / 1.12
        const addVatValue = totalDue - netVatValue

        updatedTotals.netVat = netVatValue.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
        updatedTotals.addVat = addVatValue.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      }

      return { totals: updatedTotals }
    }),

  clearAll: () => set(initialState),
}))
