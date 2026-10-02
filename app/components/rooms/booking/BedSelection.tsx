"use client";

import BedCard, { BedStatus } from "./BedCard";

export interface Bed {
  id: string;
  bedNumber: string;
  status: BedStatus;
  position?: string;
  side?: string;
  price?: string;
}

interface BedSelectionProps {
  beds: Bed[];
  selectedBedId: string | null;
  onSelectBed: (bedId: string) => void;
  capacity: number;
}

export default function BedSelection({
  beds,
  selectedBedId,
  onSelectBed,
  capacity,
}: BedSelectionProps) {
  const availableBeds = beds.filter(
    (bed) => bed.status === "available" || bed.id === selectedBedId
  ).length;

  return (
    <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col justify-between gap-2 border-b border-outline-variant pb-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-xl font-semibold text-on-surface">
            SELECT YOUR BED
          </h2>

          <p className="mt-1 text-sm text-on-surface-variant">
            Choose your preferred bed space. Beds are assigned on a
            first-come, first-served basis.
          </p>
        </div>

        <span className="self-start rounded-full bg-surface-container-high px-3 py-1 text-xs font-medium text-on-surface-variant md:self-auto">
          Capacity: {capacity} Students
        </span>
      </div>

      {/* Beds */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {beds.map((bed) => (
          <BedCard
            key={bed.id}
            bedNumber={bed.bedNumber}
            status={
              bed.id === selectedBedId
                ? "selected"
                : bed.status
            }
            position={bed.position}
            side={bed.side}
            price={bed.price}
            onSelect={() => onSelectBed(bed.id)}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-outline-variant pt-4">
        <LegendItem
          className="border-2 border-primary bg-white"
          label="Available Bed"
        />

        <LegendItem
          className="border-2 border-primary bg-primary"
          label="Selected by You"
        />

        <LegendItem
          className="bg-outline-variant"
          label="Reserved / Occupied"
        />
      </div>

      <p className="mt-4 text-center text-xs text-on-surface-variant">
        {availableBeds} bed{availableBeds !== 1 ? "s" : ""} currently available
      </p>
    </section>
  );
}

function LegendItem({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-3.5 w-3.5 rounded-full ${className}`} />
      <span className="text-xs text-on-surface-variant">{label}</span>
    </div>
  );
}