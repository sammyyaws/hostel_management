"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaBed,
  FaEdit,
} from "react-icons/fa";

type RoomHeaderProps = {
  roomId: string;
};

export default function RoomHeader({
  roomId,
}: RoomHeaderProps) {
  return (
    <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">

      {/* Back */}
      <Link
        href="/admin/rooms"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant transition hover:text-primary"
      >
        <FaArrowLeft />
        Back to Rooms
      </Link>

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        {/* Room information */}
        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-container text-primary">
            <FaBed className="text-2xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-on-surface">
              Room {roomId}
            </h1>

            <p className="mt-1 text-sm text-on-surface-variant">
              Block A · 1st Floor · 4 Bed Capacity
            </p>
          </div>

        </div>

        {/* Actions */}
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border border-outline-variant px-4 py-2.5 text-sm font-medium text-on-surface transition hover:bg-surface-container"
        >
          <FaEdit />
          Edit Room
        </button>

      </div>

      {/* Room summary */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">

        <div className="rounded-xl bg-surface p-4">
          <p className="text-sm text-on-surface-variant">
            Capacity
          </p>

          <p className="mt-1 text-xl font-semibold text-on-surface">
            4 Beds
          </p>
        </div>

        <div className="rounded-xl bg-surface p-4">
          <p className="text-sm text-on-surface-variant">
            Occupied
          </p>

          <p className="mt-1 text-xl font-semibold text-on-surface">
            3 Beds
          </p>
        </div>

        <div className="rounded-xl bg-surface p-4">
          <p className="text-sm text-on-surface-variant">
            Available
          </p>

          <p className="mt-1 text-xl font-semibold text-primary">
            1 Bed
          </p>
        </div>

      </div>

    </section>
  );
}