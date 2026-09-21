"use client";

import { FaSearch, FaFilter } from "react-icons/fa";

export default function ReportFilters() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        {/* Search */}
        <div className="flex-1">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Search
          </label>

          <div className="relative">
            <FaSearch
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search reports..."
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Report Type */}
        <div className="w-full lg:w-52">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Report Type
          </label>

          <select
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            defaultValue="All Reports"
          >
            <option>All Reports</option>
            <option>Occupancy</option>
            <option>Financial</option>
            <option>Residents</option>
            <option>Complaints</option>
            <option>Maintenance</option>
          </select>
        </div>

        {/* Date Range */}
        <div className="w-full lg:w-52">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Date Range
          </label>

          <select
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            defaultValue="This Month"
          >
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Semester</option>
            <option>Custom Range</option>
          </select>
        </div>

        {/* Filter Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          <FaFilter size={13} />
          Apply Filters
        </button>
      </div>
    </div>
  );
}