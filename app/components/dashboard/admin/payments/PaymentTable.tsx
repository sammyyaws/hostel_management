"use client";

import { FaEye } from "react-icons/fa";
import Link from "next/link"
const payments = [
  {
    id: "PAY-001",
    resident: "John Mensah",
    booking: "BK-001",
    amount: "GH₵ 2,500",
    date: "Sep 16, 2026",
    method: "Bank Transfer",
    status: "Pending",
  },
  {
    id: "PAY-002",
    resident: "Samuel Yawson",
    booking: "BK-002",
    amount: "GH₵ 3,000",
    date: "Sep 16, 2026",
    method: "Bank Transfer",
    status: "Confirmed",
  },
  {
    id: "PAY-003",
    resident: "Kofi Mensah",
    booking: "BK-003",
    amount: "GH₵ 2,500",
    date: "Sep 15, 2026",
    method: "Bank Transfer",
    status: "Rejected",
  },
  {
    id: "PAY-004",
    resident: "Daniel Owusu",
    booking: "BK-004",
    amount: "GH₵ 2,800",
    date: "Sep 15, 2026",
    method: "Bank Transfer",
    status: "Pending",
  },
];

function statusStyles(status: string) {
  switch (status) {
    case "Confirmed":
      return "bg-green-50 text-green-700";

    case "Rejected":
      return "bg-red-50 text-red-700";

    default:
      return "bg-yellow-50 text-yellow-700";
  }
}

export default function PaymentTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-sm">

    
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px] ">
        <thead>
          <tr className="border-b border-outline-variant bg-surface-container-low text-left">
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Payment ID
            </th>

            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                Resident
              </th>

            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                Booking
              </th>

            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                Amount
              </th>

            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                Date
              </th>

            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                Status
              </th>

            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment.id}
              className="border-b border-outline-variant last:border-0 transition hover:bg-surface-container-low"
            >
              <td className="px-6 py-4 text-sm font-medium text-on-surface">
                {payment.id}
              </td>

              <td className="px-6 py-4">
                <p className="text-sm font-medium text-on-surface">
                  {payment.resident}
                </p>
              </td>

              <td className="px-6 py-4 text-sm text-on-surface-variant">
                {payment.booking}
              </td>

              <td className="px-6 py-4 text-sm font-medium text-on-surface">
                {payment.amount}
              </td>

              <td className="px-6 py-4 text-sm text-on-surface-variant">
                {payment.date}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles(
                    payment.status
                  )}`}
                >
                  {payment.status}
                </span>
              </td>

              <td className="px-6 py-4 text-right">
                <Link href={`/admin/payments/${payment.id}`}>
                  <button
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant transition hover:bg-surface-container hover:text-on-surface"
                    title="View payment"
                  >
                    <FaEye />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );
}