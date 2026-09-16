"use client";

import { FaSearch, FaPlus } from "react-icons/fa";

export default function AllocationFilters() {
  return (
    <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-on-surface-variant" />

          <input
            type="text"
            placeholder="Search student, room or bed..."
            className="w-full rounded-lg border border-outline-variant bg-surface py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-primary"
          />
        </div>

        <div className="flex flex-wrap gap-3">

          <select
            className="rounded-lg border border-outline-variant bg-surface px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>

          <select
            className="rounded-lg border border-outline-variant bg-surface px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
          >
            <option>All Blocks</option>
            <option>Block A</option>
            <option>Block B</option>
            <option>Block C</option>
          </select>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary-container"
          >
            <FaPlus />
            New Allocation
          </button>

        </div>

      </div>

    </section>
  );
}