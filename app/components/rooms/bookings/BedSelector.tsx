
"use client";

import { FaBed } from "react-icons/fa";

export type BedStatus = "Available" | "Occupied" | "Reserved";

export type BookingBed = {
  id: string;
  label: string;
  status: BedStatus;
};

interface BedSelectorProps {
  beds: BookingBed[];
  selectedBed: string | null;
  onSelect: (bedId: string) => void;
}

export default function BedSelector({
  beds,
  selectedBed,
  onSelect,
}: BedSelectorProps) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold text-gray-900">Choose your bed</h3>

      <div className="mt-3 flex flex-wrap gap-3 text-xs">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-teal-500" />
          Available
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-gray-300" />
          Occupied
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded bg-amber-400" />
          Reserved
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {beds.map((bed) => {
          const isSelected = selectedBed === bed.id;
          const isAvailable = bed.status === "Available";

          return (
            <button
              key={bed.id}
              type="button"
              disabled={!isAvailable}
              onClick={() => onSelect(bed.id)}
              aria-pressed={isSelected}
              className={`rounded-xl border p-4 text-center transition ${
                isSelected
                  ? "border-teal-600 bg-teal-600 text-white"
                  : isAvailable
                    ? "border-teal-200 bg-teal-50 text-teal-800 hover:border-teal-500"
                    : bed.status === "Reserved"
                      ? "cursor-not-allowed border-amber-200 bg-amber-50 text-amber-700"
                      : "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
              }`}
            >
              <span
                className="flex justify-center text-2xl"
                aria-hidden="true"
              >
                <FaBed className="text-current" />
              </span>

              <span className="mt-2 block font-semibold">
                {bed.label}
              </span>

              <span className="mt-1 block text-xs">
                {isSelected ? "Selected" : bed.status}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
