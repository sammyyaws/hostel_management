"use client";

import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

export default function RoomFilters() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-3 border-b border-outline-variant p-5 md:flex-row">

      {/* Search */}
      <div className="relative flex-1">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-on-surface-variant" />

        <input
          type="text"
          placeholder="Search room number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-outline-variant bg-surface px-10 py-2.5 text-sm text-on-surface outline-none transition focus:border-primary"
        />
      </div>

      {/* Block */}
      <select
        className="rounded-lg border border-outline-variant bg-surface px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
        defaultValue=""
      >
        <option value="" disabled>
          Select Block
        </option>
        <option value="A">Block A</option>
        <option value="B">Block B</option>
        <option value="C">Block C</option>
        <option value="D">Block D</option>
      </select>

      {/* Status */}
      <select
        className="rounded-lg border border-outline-variant bg-surface px-4 py-2.5 text-sm text-on-surface outline-none focus:border-primary"
        defaultValue=""
      >
        <option value="" disabled>
          Room Status
        </option>
        <option value="available">Available</option>
        <option value="full">Full</option>
        <option value="maintenance">Maintenance</option>
      </select>

      {/* Filter button */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-lg border border-outline-variant px-4 py-2.5 text-sm font-medium text-on-surface transition hover:bg-surface-container"
      >
        <FaFilter />
        Filter
      </button>

    </div>
  );
}