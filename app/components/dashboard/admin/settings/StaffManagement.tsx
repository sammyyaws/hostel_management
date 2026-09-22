"use client";

import Link from "next/link";
import {
  FaPlus,
  FaEye,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa";

const staff = [
  {
    id: "STF-001",
    name: "Kwame Asante",
    email: "kwame@example.com",
    phone: "024 123 4567",
    role: "Manager",
    status: "Active",
  },
  {
    id: "STF-002",
    name: "Daniel Owusu",
    email: "daniel@example.com",
    phone: "055 987 6543",
    role: "Porter",
    status: "Active",
  },
  {
    id: "STF-003",
    name: "Michael Mensah",
    email: "michael@example.com",
    phone: "020 456 7890",
    role: "Porter",
    status: "Inactive",
  },
];

function statusStyles(status: string) {
  return status === "Active"
    ? "bg-green-50 text-green-700"
    : "bg-gray-100 text-gray-600";
}

export default function StaffManagement() {
  return (
    <div className="space-y-6 mx-auto max-w-7xl p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Staff Management
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage managers, porters and other hostel staff.
          </p>
        </div>

        <Link
          href="/admin/settings/staff/add"
          className="flex w-fit items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-700"
        >
          <FaPlus size={13} />
          Add Staff
        </Link>
      </div>

      {/* Staff Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                  Staff
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                  Contact
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                  Role
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                  Status
                </th>

                <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-gray-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {staff.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                        {member.role === "Manager" ? (
                          <FaUserShield size={16} />
                        ) : (
                          <FaUserTie size={16} />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {member.name}
                        </p>

                        <p className="text-xs text-gray-500">
                          {member.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm text-gray-700">
                      {member.email}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {member.phone}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-700">
                    {member.role}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles(
                        member.status
                      )}`}
                    >
                      {member.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-right">
                    <Link
                      href={`/admin/settings/staff/${member.id}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-teal-50 hover:text-teal-600"
                      title="View staff"
                    >
                      <FaEye size={15} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}