"use client";

import {
  FaBed,
  FaCheck,
  FaCheckCircle,
  FaLock,
  FaBan,
} from "react-icons/fa";

export type BedStatus =
  | "available"
  | "selected"
  | "reserved";

export interface Bed {
  id: string;
  name: string;
  position: string;
  side: string;
  price: string;
  status: BedStatus;
}

interface BedCardProps {
  bed: Bed;
  onSelect: (bed: Bed) => void;
}

export default function BedCard({
  bed,
  onSelect,
}: BedCardProps) {
  const isAvailable = bed.status === "available";
  const isSelected = bed.status === "selected";
  const isReserved = bed.status === "reserved";

  return (
    <div
      className={`
        relative flex flex-col justify-between rounded-xl p-5
        transition-all
        ${
          isSelected
            ? "border-2 border-primary bg-surface-container-lowest shadow-sm ring-2 ring-primary/20"
            : isAvailable
              ? "border-2 border-outline-variant bg-surface-container-lowest hover:border-primary"
              : "border border-outline-variant bg-surface-container-low opacity-60"
        }
      `}
    >
      {/* Selected badge */}
      {isSelected && (
        <div className="absolute -top-3 right-4">
          <span className="flex items-center gap-1 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-on-primary shadow-sm">
            <FaCheck className="text-[10px]" />
            Selected
          </span>
        </div>
      )}

      {/* Header */}
      <div
        className={`mb-4 flex items-center justify-between ${
          isSelected ? "mt-1" : ""
        }`}
      >
        <span
          className={`text-xl font-semibold ${
            isSelected
              ? "text-primary"
              : isReserved
                ? "text-on-surface-variant"
                : "text-on-surface"
          }`}
        >
          {bed.name}
        </span>

        {isAvailable && (
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
            Available
          </span>
        )}

        {isSelected && (
          <span className="rounded-full bg-primary-container/20 px-2.5 py-0.5 text-xs font-semibold text-primary">
            Your Choice
          </span>
        )}

        {isReserved && (
          <span className="rounded-full bg-surface-container-highest px-2.5 py-0.5 text-xs font-semibold text-on-surface-variant">
            Reserved
          </span>
        )}
      </div>

      {/* Bed visual */}
      <div
        className={`
          my-3 rounded-lg border py-4 text-center
          ${
            isSelected
              ? "border-primary/20 bg-primary/5"
              : isReserved
                ? "border-outline-variant bg-surface-container"
                : "border-outline-variant bg-surface-container-low"
          }
        `}
      >
        <FaBed
          className={`mx-auto mb-2 text-[42px] ${
            isReserved ? "text-outline" : "text-primary"
          }`}
        />

        <span
          className={`block text-xs font-semibold ${
            isSelected
              ? "text-primary"
              : "text-on-surface-variant"
          }`}
        >
          {bed.position}
        </span>
      </div>

      {/* Details */}
      <div className="mt-2 space-y-2 border-t border-outline-variant pt-2">
        <div className="flex justify-between text-xs text-on-surface-variant">
          <span>Side:</span>

          <span
            className={
              isReserved
                ? "font-medium text-on-surface-variant"
                : "font-medium text-on-surface"
            }
          >
            {bed.side}
          </span>
        </div>

        {isReserved ? (
          <div className="flex justify-between text-xs text-on-surface-variant">
            <span>Status:</span>

            <span className="flex items-center gap-1 font-medium text-error">
              <FaLock className="text-[10px]" />
              Occupied
            </span>
          </div>
        ) : (
          <div className="flex justify-between text-xs text-on-surface-variant">
            <span>Semester:</span>

            <span className="font-semibold text-primary">
              {bed.price}
            </span>
          </div>
        )}
      </div>

      {/* Action */}
      {isAvailable && (
        <button
          type="button"
          onClick={() => onSelect(bed)}
          className="mt-4 flex w-full items-center justify-center gap-1 rounded-xl border border-primary px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-on-primary"
        >
          Select Bed
        </button>
      )}

      {isSelected && (
        <button
          type="button"
          onClick={() => onSelect(bed)}
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-on-primary shadow-sm"
        >
          <FaCheckCircle className="text-sm" />
          Active Selection
        </button>
      )}

      {isReserved && (
        <button
          type="button"
          disabled
          className="mt-4 flex w-full cursor-not-allowed items-center justify-center gap-1 rounded-xl bg-surface-container-highest px-4 py-2.5 text-sm font-medium text-outline"
        >
          <FaBan className="text-xs" />
          Unavailable
        </button>
      )}
    </div>
  );
}