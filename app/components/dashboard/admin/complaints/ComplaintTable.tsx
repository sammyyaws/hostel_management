"use client";

import Link from "next/link";
import { FaEye } from "react-icons/fa";

export function statusStyles(status: string) {
  switch (status) {
    case "Resolved":
      return "bg-green-50 text-green-700";

    case "Pending":
      return "bg-red-50 text-red-700";

    default:
      return "bg-yellow-50 text-yellow-700";
  }
}

const complaints = [
  {
    id: "CMP-001",
    resident: "John Mensah",
    category: "Plumbing",
    subject: "Leaking bathroom tap",
    date: "Sep 16, 2026",
    status: "Pending",
  },
  {
    id: "CMP-002",
    resident: "Samuel Yawson",
    category: "Electrical",
    subject: "Room light not working",
    date: "Sep 15, 2026",
    status: "In Progress",
  },
  {
    id: "CMP-003",
    resident: "Kofi Mensah",
    category: "Maintenance",
    subject: "Broken wardrobe door",
    date: "Sep 14, 2026",
    status: "Resolved",
  },
  {
    id: "CMP-004",
    resident: "Daniel Owusu",
    category: "Security",
    subject: "Broken entrance lock",
    date: "Sep 13, 2026",
    status: "Pending",
  },
];

export default function ComplaintTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <table className="w-full min-w-[900px] text-left">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
              Complaint ID
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
              Resident
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
              Category
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
              Subject
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
              Date
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
              Status
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {complaints.map((complaint) => (
            <tr
              key={complaint.id}
              className="hover:bg-gray-50"
            >
              <td className="px-5 py-4 text-sm font-medium text-gray-900">
                {complaint.id}
              </td>

              <td className="px-5 py-4 text-sm text-gray-700">
                {complaint.resident}
              </td>

              <td className="px-5 py-4 text-sm text-gray-700">
                {complaint.category}
              </td>

              <td className="max-w-[220px] truncate px-5 py-4 text-sm text-gray-700">
                {complaint.subject}
              </td>

              <td className="px-5 py-4 text-sm text-gray-600">
                {complaint.date}
              </td>

              <td className="px-5 py-4">
             <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles(
                    complaint.status
                  )}`}
                >
                  {complaint.status}
                </span>
              </td>

              <td className="px-5 py-4">
                <Link
                  href={`/admin/complaints/${complaint.id}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-teal-50 hover:text-teal-600"
                  title="View complaint"
                >
                  <FaEye />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}