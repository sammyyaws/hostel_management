"use client";

import {
  FaEye,
  FaEllipsisV,
} from "react-icons/fa";

type Allocation = {
  id: string;
  student: string;
  studentId: string;
  room: string;
  bed: string;
  block: string;
  date: string;
  status: "Active" | "Pending" | "Cancelled";
};

const allocations: Allocation[] = [
  {
    id: "1",
    student: "John Doe",
    studentId: "TYB-2026-001",
    room: "A102",
    bed: "Bed 01",
    block: "Block A",
    date: "12 Aug 2026",
    status: "Active",
  },
  {
    id: "2",
    student: "Mary Smith",
    studentId: "TYB-2026-002",
    room: "A102",
    bed: "Bed 02",
    block: "Block A",
    date: "12 Aug 2026",
    status: "Active",
  },
  {
    id: "3",
    student: "Kofi Mensah",
    studentId: "TYB-2026-003",
    room: "B204",
    bed: "Bed 03",
    block: "Block B",
    date: "10 Aug 2026",
    status: "Pending",
  },
  {
    id: "4",
    student: "Ama Boateng",
    studentId: "TYB-2026-004",
    room: "C105",
    bed: "Bed 01",
    block: "Block C",
    date: "08 Aug 2026",
    status: "Cancelled",
  },
];

export default function AllocationsTable() {
  return (
    <section className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-sm">

      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">

        <table className="w-full text-left">

          <thead className="border-b border-outline-variant bg-surface">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant">
                Student
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant">
                Room
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant">
                Bed
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant">
                Block
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant">
                Date
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant">
                Status
              </th>

              <th className="px-6 py-4 text-xs font-semibold text-on-surface-variant">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-outline-variant">

            {allocations.map((allocation) => (
              <tr
                key={allocation.id}
                className="transition hover:bg-surface"
              >

                <td className="px-6 py-4">
                  <p className="font-medium text-on-surface">
                    {allocation.student}
                  </p>

                  <p className="text-xs text-on-surface-variant">
                    {allocation.studentId}
                  </p>
                </td>

                <td className="px-6 py-4 text-sm text-on-surface">
                  {allocation.room}
                </td>

                <td className="px-6 py-4 text-sm text-on-surface">
                  {allocation.bed}
                </td>

                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  {allocation.block}
                </td>

                <td className="px-6 py-4 text-sm text-on-surface-variant">
                  {allocation.date}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status={allocation.status} />
                </td>

                <td className="px-6 py-4">

                  <div className="flex items-center gap-2">

                    <button
                      type="button"
                      className="rounded-lg p-2 text-on-surface-variant hover:bg-surface-container hover:text-primary"
                    >
                      <FaEye />
                    </button>

                    <button
                      type="button"
                      className="rounded-lg p-2 text-on-surface-variant hover:bg-surface-container"
                    >
                      <FaEllipsisV />
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile cards */}
      <div className="divide-y divide-outline-variant md:hidden">

        {allocations.map((allocation) => (
          <div
            key={allocation.id}
            className="p-5"
          >

            <div className="flex items-start justify-between">

              <div>
                <p className="font-semibold text-on-surface">
                  {allocation.student}
                </p>

                <p className="text-xs text-on-surface-variant">
                  {allocation.studentId}
                </p>
              </div>

              <StatusBadge status={allocation.status} />

            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

              <div>
                <p className="text-xs text-on-surface-variant">
                  Room
                </p>
                <p className="font-medium">
                  {allocation.room}
                </p>
              </div>

              <div>
                <p className="text-xs text-on-surface-variant">
                  Bed
                </p>
                <p className="font-medium">
                  {allocation.bed}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

function StatusBadge({
  status,
}: {
  status: Allocation["status"];
}) {
  const styles = {
    Active: "bg-primary-container text-primary",
    Pending: "bg-secondary-container text-on-secondary-container",
    Cancelled: "bg-error-container text-on-error-container",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}