"use client";

import { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaPlus,
  FaEllipsisV,
} from "react-icons/fa";

type Resident = {
  id: number;
  name: string;
  studentId: string;
  room: string;
  phone: string;
  status: "Active" | "Pending" | "Inactive";
  payment: "Paid" | "Outstanding";
};

const residents: Resident[] = [
  {
    id: 1,
    name: "John Doe",
    studentId: "TYB-2026-001",
    room: "A102",
    phone: "024 123 4567",
    status: "Active",
    payment: "Paid",
  },
  {
    id: 2,
    name: "Mary Smith",
    studentId: "TYB-2026-002",
    room: "A103",
    phone: "055 456 7890",
    status: "Active",
    payment: "Paid",
  },
  {
    id: 3,
    name: "Kofi Mensah",
    studentId: "TYB-2026-003",
    room: "B204",
    phone: "020 987 6543",
    status: "Active",
    payment: "Outstanding",
  },
  {
    id: 4,
    name: "Ama Boateng",
    studentId: "TYB-2026-004",
    room: "C105",
    phone: "054 321 8765",
    status: "Pending",
    payment: "Paid",
  },
  {
    id: 5,
    name: "Kwame Asante",
    studentId: "TYB-2026-005",
    room: "A201",
    phone: "027 555 1234",
    status: "Active",
    payment: "Paid",
  },
];

export default function ResidentsTable() {
  const [search, setSearch] = useState("");

  const filteredResidents = residents.filter((resident) =>
    `${resident.name} ${resident.studentId} ${resident.room}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-sm">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-outline-variant p-5 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-xl font-semibold text-on-surface">
            All Residents
          </h2>

          <p className="mt-1 text-sm text-on-surface-variant">
            View and manage registered hostel residents.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-container"
        >
          <FaPlus />
          Add Resident
        </button>

      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 border-b border-outline-variant p-5 md:flex-row">

        {/* Search */}
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-on-surface-variant" />

          <input
            type="text"
            placeholder="Search residents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-outline-variant bg-surface px-10 py-2.5 text-sm text-on-surface outline-none transition focus:border-primary"
          />
        </div>

        {/* Filter */}
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border border-outline-variant px-4 py-2.5 text-sm font-medium text-on-surface transition hover:bg-surface-container"
        >
          <FaFilter />
          Filter
        </button>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">

          <thead>
            <tr className="border-b border-outline-variant bg-surface-container-low text-left">
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                Resident
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                Student ID
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                Room
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                Phone
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                Status
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
                Payment
              </th>

              <th className="px-5 py-4" />
            </tr>
          </thead>

          <tbody>
            {filteredResidents.map((resident) => (
              <tr
                key={resident.id}
                className="border-b border-outline-variant last:border-0 hover:bg-surface-container-low"
              >
                {/* Resident */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container font-semibold text-primary">
                      {resident.name
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>

                    <div>
                      <p className="font-medium text-on-surface">
                        {resident.name}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Student ID */}
                <td className="px-5 py-4 text-sm text-on-surface-variant">
                  {resident.studentId}
                </td>

                {/* Room */}
                <td className="px-5 py-4 text-sm font-medium text-on-surface">
                  {resident.room}
                </td>

                {/* Phone */}
                <td className="px-5 py-4 text-sm text-on-surface-variant">
                  {resident.phone}
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <StatusBadge status={resident.status} />
                </td>

                {/* Payment */}
                <td className="px-5 py-4">
                  <PaymentBadge status={resident.payment} />
                </td>

                {/* Actions */}
                <td className="px-5 py-4 text-right">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-on-surface-variant transition hover:bg-surface-container hover:text-on-surface"
                  >
                    <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-outline-variant p-5 text-sm text-on-surface-variant">
        <span>
          Showing {filteredResidents.length} of {residents.length} residents
        </span>

        <span>
          Page 1 of 1
        </span>
      </div>

    </section>
  );
}

function StatusBadge({
  status,
}: {
  status: Resident["status"];
}) {
  const styles = {
    Active: "bg-primary-container text-primary",
    Pending: "bg-secondary-container text-on-secondary-container",
    Inactive: "bg-surface-container text-on-surface-variant",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function PaymentBadge({
  status,
}: {
  status: Resident["payment"];
}) {
  const styles = {
    Paid: "bg-primary-container text-primary",
    Outstanding: "bg-error-container text-on-error-container",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}