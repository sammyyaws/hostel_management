"use client";

import { FaSearch, FaChevronDown } from "react-icons/fa";

export default function PaymentFilters() {
  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      {/* Search */}
      <div className="relative flex-1">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search resident or booking ID..."
          className="w-full rounded-lg border border-gray-200 bg-surface px-4 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary"
        />
      </div>

      {/* Status */}
      <div className="relative">
        <select
          className="w-full appearance-none rounded-lg border border-gray-200 bg-surface px-4 py-3 pr-10 text-sm text-on-surface-variant outline-none focus:border-black lg:w-44"
          defaultValue="all"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="rejected">Rejected</option>
        </select>

        <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400" />
      </div>

      {/* Date */}
      <div className="relative">
        <select
          className="w-full appearance-none rounded-lg border border-gray-200 bg-surface px-4 py-3 pr-10 text-sm text-on-surface-variant outline-none focus:border-primary lg:w-44"
          defaultValue="all"
        >
          <option value="all">All Dates</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>

        <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400" />
      </div>
    </div>
  );
}

