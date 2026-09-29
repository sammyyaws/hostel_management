"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaExchangeAlt, FaTimes } from "react-icons/fa";

type AllocationDetailsProps = {
  allocationId: string;
  basePath?: string;
};

export default function AllocationDetails({
  allocationId,
  basePath = "/admin/allocations",
}: AllocationDetailsProps) {
  const [showModal, setShowModal] = useState(false);

  const allocation = {
    id: allocationId,
    resident: "John Mensah",
    studentId: "KNUST-2026-001",
    room: "A-12",
    bed: "A-12-03",
    block: "Block A",
    roomType: "4-Bed Room",
    startDate: "20 Sep 2026",
    status: "Allocated",
  };

  const handleUnallocate = () => {
    console.log("Unallocate:", allocation.id);
    setShowModal(false);
  };

  return (
    <main className="min-h-screen bg-surface p-4 md:p-8">
      <div className="mx-auto max-w-5xl space-y-6">

        {/* Header */}
        <div className="flex items-center gap-3">
          <Link
            href={basePath}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-on-surface-variant transition hover:border-primary hover:text-primary"
          >
            <FaArrowLeft />
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-on-surface">
              Allocation Details
            </h1>
            <p className="mt-1 text-sm text-on-surface-variant">
              View and manage this resident's room allocation.
            </p>
          </div>
        </div>

        {/* Details */}
        <section className="rounded-2xl border border-gray-200 bg-surface-container-lowest p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-on-surface">
                {allocation.resident}
              </h2>
              <p className="mt-1 text-sm text-on-surface-variant">
                {allocation.studentId}
              </p>
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              {allocation.status}
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Detail label="Block" value={allocation.block} />
            <Detail label="Room" value={allocation.room} />
            <Detail label="Bed" value={allocation.bed} />
            <Detail label="Room Type" value={allocation.roomType} />
            <Detail label="Start Date" value={allocation.startDate} />
            <Detail label="Student ID" value={allocation.studentId} />
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-gray-200 pt-6">
            <Link
              href={`${basePath}/${allocation.id}/reallocate`}
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary-container"
            >
              <FaExchangeAlt />
              Reallocate Bed
            </Link>

            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
              <FaTimes />
              Unallocate
            </button>
          </div>
        </section>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-on-surface">
              Unallocate Resident?
            </h2>

            <p className="mt-2 text-sm text-on-surface-variant">
              This will remove {allocation.resident} from room{" "}
              {allocation.room}, bed {allocation.bed}.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleUnallocate}
                className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white"
              >
                Unallocate
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-on-surface-variant">{label}</p>
      <p className="mt-1 font-medium text-on-surface">{value}</p>
    </div>
  );
}