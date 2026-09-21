"use client";

import Link from "next/link";
import { FaEye } from "react-icons/fa";

export function statusStyles(status: string) {
  switch (status) {
    case "Published":
      return "bg-green-50 text-green-700";

    case "Draft":
      return "bg-gray-100 text-gray-600";

    default:
      return "bg-yellow-50 text-yellow-700";
  }
}

const announcements = [
  {
    id: "ANN-001",
    title: "Water Supply Maintenance",
    audience: "All Residents",
    date: "Sep 20, 2026",
    status: "Published",
  },
  {
    id: "ANN-002",
    title: "Fee Payment Reminder",
    audience: "All Residents",
    date: "Sep 18, 2026",
    status: "Published",
  },
  {
    id: "ANN-003",
    title: "Block A Electrical Maintenance",
    audience: "Block A",
    date: "Sep 17, 2026",
    status: "Scheduled",
  },
  {
    id: "ANN-004",
    title: "Hostel Orientation Notice",
    audience: "All Residents",
    date: "Sep 16, 2026",
    status: "Draft",
  },
];

export default function AnnouncementTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <table className="w-full min-w-[850px] text-left">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
              Announcement ID
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
              Title
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
              Audience
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
          {announcements.map((announcement) => (
            <tr
              key={announcement.id}
              className="hover:bg-gray-50"
            >
              <td className="px-5 py-4 text-sm font-medium text-gray-900">
                {announcement.id}
              </td>

              <td className="px-5 py-4 text-sm font-medium text-gray-900">
                {announcement.title}
              </td>

              <td className="px-5 py-4 text-sm text-gray-700">
                {announcement.audience}
              </td>

              <td className="px-5 py-4 text-sm text-gray-600">
                {announcement.date}
              </td>

              <td className="px-5 py-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles(
                    announcement.status
                  )}`}
                >
                  {announcement.status}
                </span>
              </td>

              <td className="px-5 py-4">
                <Link
                  href={`/admin/announcements/${announcement.id}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-teal-50 hover:text-teal-600"
                  title="View announcement"
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