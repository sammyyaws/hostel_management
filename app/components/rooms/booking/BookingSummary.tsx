"use client";

import { FaArrowRight, FaReceipt, FaShieldAlt } from "react-icons/fa";
import BookingSummaryRow from "./BookingSummaryRow";

interface BookingSummaryProps {
  room: string;
  bed: string | null;
  occupancy: string;
  duration: string;

  accommodationFee: string;
  cautionDeposit: string;
  utilities: string;

  total: string;

  onContinue: () => void;
  onChooseDifferentRoom: () => void;

  disabled?: boolean;
}

export default function BookingSummary({
  room,
  bed,
  occupancy,
  duration,
  accommodationFee,
  cautionDeposit,
  utilities,
  total,
  onContinue,
  onChooseDifferentRoom,
  disabled = false,
}: BookingSummaryProps) {
  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-outline-variant pb-4">
        <h2 className="text-xl font-semibold text-on-surface">
          Booking Summary
        </h2>

        <FaReceipt className="text-primary" />
      </div>

      {/* Selection */}
      <div className="space-y-3 border-b border-outline-variant py-4">
        <BookingSummaryRow
          label="Hall & Room"
          value={
            <span className="font-bold">
              {room}
            </span>
          }
        />

        <BookingSummaryRow
          label="Allocated Bed Space"
          value={
            bed ? (
              <span className="rounded bg-primary px-2 py-0.5 text-xs font-bold text-on-primary">
                {bed}
              </span>
            ) : (
              <span className="text-xs text-on-surface-variant">
                Not selected
              </span>
            )
          }
        />

        <BookingSummaryRow
          label="Room Occupancy"
          value={occupancy}
        />

        <BookingSummaryRow
          label="Duration"
          value={duration}
        />
      </div>

      {/* Financial breakdown */}
      <div className="space-y-2.5 border-b border-outline-variant py-4">
        <BookingSummaryRow
          label="Hostel Accommodation Fee"
          value={
            <span className="font-semibold">
              {accommodationFee}
            </span>
          }
        />

        <BookingSummaryRow
          label="Refundable Caution Deposit"
          value={
            <span className="font-semibold">
              {cautionDeposit}
            </span>
          }
        />

        <BookingSummaryRow
          label="Utility & High-Speed Wi-Fi"
          value={
            <span className="font-semibold text-primary">
              {utilities}
            </span>
          }
        />
      </div>

      {/* Total */}
      <div className="pb-6 pt-4">
        <div className="mb-1 flex items-baseline justify-between gap-4">
          <span className="text-xl font-semibold text-on-surface">
            Total Payable
          </span>

          <span className="text-2xl font-bold text-primary">
            {total}
          </span>
        </div>

        <p className="text-right text-xs text-on-surface-variant">
          Taxes and utilities included
        </p>
      </div>

      {/* Continue */}
      <button
        type="button"
        disabled={disabled}
        onClick={onContinue}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary-container px-6 py-3.5 text-base font-bold text-on-secondary-container shadow-sm transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continue Booking
        <FaArrowRight className="text-sm" />
      </button>

      {/* Different room */}
      <button
        type="button"
        onClick={onChooseDifferentRoom}
        className="mt-3 w-full rounded-xl border border-outline-variant px-4 py-2.5 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-high"
      >
        Choose a Different Room
      </button>

      {/* Reassurance */}
      <div className="mt-6 flex items-center gap-2.5 border-t border-outline-variant pt-4 text-xs text-on-surface-variant">
        <span className="text-primary">⏱</span>

        <span>
          Your reservation will remain pending until payment is
          completed.
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-surface-container-high p-3 text-xs text-on-surface-variant">
        <FaShieldAlt className="text-tertiary" />

        <span>Official TYB Hostel Residential Registry</span>
      </div>
    </div>
  );
}