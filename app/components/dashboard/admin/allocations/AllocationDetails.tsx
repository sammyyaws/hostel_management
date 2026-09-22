"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaArrowLeft,
  FaBed,
  FaExchangeAlt,
  FaMapMarkerAlt,
  FaUser,
  FaTimes,
} from "react-icons/fa";

type AllocationDetailsProps = {
  allocationId: string;
};

export default function AllocationDetails({
  allocationId,
}: AllocationDetailsProps) {
  const [showUnallocateModal, setShowUnallocateModal] = useState(false);

  // Temporary frontend data.
  // This will come from Django later.
  const allocation = {
    id: allocationId,
    resident: "John Mensah",
    studentId: "KNUST-2026-001",
    room: "A-12",
    bed: "A-12-03",
    block: "Block A",
    roomType: "4-Bed Room",
    startDate: "September 20, 2026",
    status: "Allocated",
  };

  const handleUnallocate = () => {
    // Backend action will be connected later.
    console.log("Unallocate:", allocation.id);

    setShowUnallocateModal(false);
  };

  return (
    <div className="space-y-6 mx-auto max-w-7xl p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/allocations"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50"
          >
            <FaArrowLeft size={14} />
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Allocation Details
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Allocation ID: {allocation.id}
            </p>
          </div>
        </div>

        <span className="w-fit rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
          {allocation.status}
        </span>
      </div>

      {/* Resident Information */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
            <FaUser size={17} />
          </div>

          <div>
            <h2 className="font-semibold text-gray-900">
              Resident Information
            </h2>

            <p className="text-sm text-gray-500">
              Resident assigned to this bed
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <InfoItem label="Resident Name" value={allocation.resident} />

          <InfoItem label="Student ID" value={allocation.studentId} />

          <InfoItem label="Allocation Start" value={allocation.startDate} />
        </div>
      </div>

      {/* Room Information */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
            <FaBed size={17} />
          </div>

          <div>
            <h2 className="font-semibold text-gray-900">
              Room & Bed
            </h2>

            <p className="text-sm text-gray-500">
              Current accommodation assignment
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <InfoItem
            label="Block"
            value={allocation.block}
            icon={<FaMapMarkerAlt size={13} />}
          />

          <InfoItem label="Room" value={allocation.room} />

          <InfoItem label="Bed" value={allocation.bed} />

          <InfoItem label="Room Type" value={allocation.roomType} />
        </div>
      </div>

      {/* Actions */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-gray-900">
          Allocation Actions
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Manage this resident's current accommodation.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/admin/allocations/${allocation.id}/reallocate`}
            className="flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
          >
            <FaExchangeAlt size={14} />
            Reallocate Bed
          </Link>

          <button
            type="button"
            onClick={() => setShowUnallocateModal(true)}
            className="flex items-center justify-center gap-2 rounded-lg border border-red-200 px-5 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
          >
            <FaTimes size={14} />
            Unallocate Bed
          </button>
        </div>
      </div>

      {/* Unallocate Modal */}
      {showUnallocateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-gray-900">
              Unallocate Bed?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Are you sure you want to remove{" "}
              <span className="font-medium text-gray-900">
                {allocation.resident}
              </span>{" "}
              from bed{" "}
              <span className="font-medium text-gray-900">
                {allocation.bed}
              </span>
              ?
            </p>

            <p className="mt-3 rounded-lg bg-yellow-50 p-3 text-xs text-yellow-700">
              The bed will become available for another resident after the
              allocation is removed.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowUnallocateModal(false)}
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleUnallocate}
                className="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700"
              >
                Unallocate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InfoItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>

      <div className="mt-1 flex items-center gap-2 text-sm font-medium text-gray-900">
        {icon && <span className="text-teal-600">{icon}</span>}
        {value}
      </div>
    </div>
  );
}