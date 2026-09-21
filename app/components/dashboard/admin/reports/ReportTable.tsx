"use client";

import Link from "next/link";
import { FaEye, FaFileAlt } from "react-icons/fa";

const reports = [
  {
    id: "RPT-001",
    name: "September Occupancy Report",
    type: "Occupancy",
    period: "September 2026",
    generated: "Sep 20, 2026",
  },
  {
    id: "RPT-002",
    name: "September Financial Report",
    type: "Financial",
    period: "September 2026",
    generated: "Sep 20, 2026",
  },
  {
    id: "RPT-003",
    name: "Resident Summary Report",
    type: "Residents",
    period: "September 2026",
    generated: "Sep 19, 2026",
  },
  {
    id: "RPT-004",
    name: "Complaints & Maintenance Report",
    type: "Complaints",
    period: "September 2026",
    generated: "Sep 18, 2026",
  },
];

function typeStyles(type: string) {
  switch (type) {
    case "Occupancy":
      return "bg-blue-50 text-blue-700";
    case "Financial":
      return "bg-green-50 text-green-700";
    case "Residents":
      return "bg-purple-50 text-purple-700";
    case "Complaints":
      return "bg-yellow-50 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

export default function ReportTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="font-semibold text-gray-900">Generated Reports</h2>
        <p className="mt-1 text-sm text-gray-500">
          View and manage hostel reports.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                Report
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                Type
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                Period
              </th>

              <th className="px-5 py-3 text-xs font-semibold uppercase text-gray-500">
                Generated
              </th>

              <th className="px-5 py-3 text-right text-xs font-semibold uppercase text-gray-500">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                      <FaFileAlt size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {report.name}
                      </p>

                      <p className="text-xs text-gray-500">{report.id}</p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${typeStyles(
                      report.type
                    )}`}
                  >
                    {report.type}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {report.period}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {report.generated}
                </td>

                <td className="px-5 py-4 text-right">
                  <Link
                    href={`/admin/reports/${report.id}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-teal-50 hover:text-teal-600"
                    title="View report"
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
  );
}