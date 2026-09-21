"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaCheck,
  FaTimes,
  FaUser,
  FaBed,
  FaMoneyBillWave,
} from "react-icons/fa";

type PaymentDetailsProps = {
  paymentId: string;
};

export default function PaymentDetails({
  paymentId,
}: PaymentDetailsProps) {
  return (
    <div className="space-y-6 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <Link
            href="/admin/payments"
            className="mb-3 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600"
          >
            <FaArrowLeft />
            Back to Payments
          </Link>

          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">
              Payment Details
            </h1>

            <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
              Pending
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Payment ID: {paymentId}
          </p>
        </div>

      </div>

      {/* Information cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Resident */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
              <FaUser />
            </div>

            <h2 className="font-semibold text-gray-900">
              Resident Information
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500">Name</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                John Mensah
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="mt-1 text-sm text-gray-700">
                john@example.com
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="mt-1 text-sm text-gray-700">
                024 XXX XXXX
              </p>
            </div>
          </div>
        </div>

        {/* Booking */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
              <FaBed />
            </div>

            <h2 className="font-semibold text-gray-900">
              Booking Information
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500">Booking ID</p>
              <p className="mt-1 text-sm font-medium">
                BK-001
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Block</p>
              <p className="mt-1 text-sm font-medium">
                Block A
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Room</p>
              <p className="mt-1 text-sm font-medium">
                A101
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Bed</p>
              <p className="mt-1 text-sm font-medium">
                Bed 2
              </p>
            </div>

            <div className="col-span-2">
              <p className="text-xs text-gray-500">
                Duration
              </p>
              <p className="mt-1 text-sm font-medium">
                2026 / 2027 Academic Year
              </p>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
              <FaMoneyBillWave />
            </div>

            <h2 className="font-semibold text-gray-900">
              Payment Information
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500">
                Amount
              </p>

              <p className="mt-1 text-lg font-bold text-gray-900">
                GH₵ 2,500
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Payment Method
              </p>

              <p className="mt-1 text-sm font-medium">
                Bank Transfer
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Payment Date
              </p>

              <p className="mt-1 text-sm">
                September 16, 2026
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Transaction Reference
              </p>

              <p className="mt-1 text-sm font-medium">
                TRX-928371
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Payment proof */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="mb-5">
          <h2 className="font-semibold text-gray-900">
            Payment Proof
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Review the payment receipt submitted by the resident.
          </p>
        </div>

        <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50">
          <p className="text-sm text-gray-400">
            Payment proof image will appear here
          </p>
        </div>

      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 px-5 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
        >
          <FaTimes />
          Reject Payment
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          <FaCheck />
          Confirm & Allocate
        </button>

      </div>

    </div>
  );
}