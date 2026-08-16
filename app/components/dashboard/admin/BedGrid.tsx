"use client";

import Link from "next/link";
import {
  FaBed,
  FaUser,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

type Bed = {
  id: string;
  label: string;
  status: "Occupied" | "Available" | "Maintenance";
  resident?: string;
  studentId?: string;
};

const beds: Bed[] = [
  {
    id: "1",
    label: "Bed 01",
    status: "Occupied",
    resident: "John Doe",
    studentId: "TYB-2026-001",
  },
  {
    id: "2",
    label: "Bed 02",
    status: "Occupied",
    resident: "Mary Smith",
    studentId: "TYB-2026-002",
  },
  {
    id: "3",
    label: "Bed 03",
    status: "Occupied",
    resident: "Kofi Mensah",
    studentId: "TYB-2026-003",
  },
  {
    id: "4",
    label: "Bed 04",
    status: "Available",
  },
];

export default function BedGrid() {
  return (
    <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-xl font-semibold text-on-surface">
            Beds
          </h2>

          <p className="mt-1 text-sm text-on-surface-variant">
            View current occupants and available bed spaces.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-xs text-on-surface-variant">

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-primary" />
            Occupied
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-secondary" />
            Available
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-error" />
            Maintenance
          </div>

        </div>

      </div>

      {/* Beds */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {beds.map((bed) => (
          <BedCard
            key={bed.id}
            bed={bed}
          />
        ))}

      </div>

    </section>
  );
}

function BedCard({
  bed,
}: {
  bed: Bed;
}) {
  const isOccupied = bed.status === "Occupied";
  const isAvailable = bed.status === "Available";

  return (
    <div
      className={`rounded-2xl border p-5 transition ${
        isOccupied
          ? "border-primary/20 bg-primary-container/20"
          : isAvailable
            ? "border-secondary/30 bg-secondary-container/10"
            : "border-error/20 bg-error-container/20"
      }`}
    >

      {/* Icon */}
      <div className="flex items-start justify-between">

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            isOccupied
              ? "bg-primary-container text-primary"
              : isAvailable
                ? "bg-secondary-container text-on-secondary-container"
                : "bg-error-container text-error"
          }`}
        >
          <FaBed />
        </div>

        {isOccupied && (
          <FaCheckCircle className="text-primary" />
        )}

        {isAvailable && (
          <FaExclamationCircle className="text-secondary" />
        )}

      </div>

      {/* Bed */}
      <div className="mt-5">

        <p className="text-sm text-on-surface-variant">
          {bed.label}
        </p>

        <h3 className="mt-1 text-lg font-semibold text-on-surface">
          {bed.status}
        </h3>

      </div>

      {/* Resident */}
      {bed.resident && (
        <div className="mt-4 flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-primary">
            <FaUser />
          </div>

          <div>
            <p className="text-sm font-medium text-on-surface">
              {bed.resident}
            </p>

            <p className="text-xs text-on-surface-variant">
              {bed.studentId}
            </p>
          </div>

        </div>
      )}

      {/* Available action */}
      {isAvailable && (
        <Link
          href={`/admin/allocations?bed=${bed.id}`}
          className="mt-5 block w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-primary-container"
        >
          Allocate Bed
        </Link>
      )}

    </div>
  );
}