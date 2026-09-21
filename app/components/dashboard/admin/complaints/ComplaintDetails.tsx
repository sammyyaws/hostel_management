"use client";

import Link from "next/link";
import { useState } from "react";
import {statusStyles} from "./ComplaintTable";
import {
  FaArrowLeft,
  FaUser,
  FaTools,
  FaCalendarAlt,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

type ComplaintDetailsProps = {
  complaintId: string;
};

export default function ComplaintDetails({
  complaintId,
}: ComplaintDetailsProps) {
  const [status, setStatus] = useState("Pending");

  return (
    <div className="space-y-6 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div>
        <Link
          href="/admin/complaints"
          className="mb-4 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600"
        >
          <FaArrowLeft />
          Back to Complaints
        </Link>

     <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
  <div>
    <h1 className="text-2xl font-bold text-gray-900">
      Complaint Details
    </h1>

    <p className="mt-1 text-sm text-gray-500">
      {complaintId}
    </p>
  </div>

  <span
    className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${statusStyles(
      status
    )}`}
  >
    {status}
  </span>
</div>
      </div>

      {/* Information cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Resident Information */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
              <FaUser />
            </div>

            <h2 className="font-semibold text-gray-900">
              Resident Information
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500">Name</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                John Mensah
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Room</p>
              <p className="mt-1 text-sm text-gray-700">
                Block A · A101 · Bed 2
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="mt-1 text-sm text-gray-700">
                024 XXX XXXX
              </p>
            </div>
          </div>
        </div>

        {/* Complaint Information */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
              <FaTools />
            </div>

            <h2 className="font-semibold text-gray-900">
              Complaint Information
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500">Category</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                Plumbing
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Subject</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                Leaking bathroom tap
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Submitted</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-gray-700">
                <FaCalendarAlt className="text-gray-400" />
                September 16, 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 font-semibold text-gray-900">
          Complaint Description
        </h2>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm leading-6 text-gray-700">
            The bathroom tap in my room has been leaking since
            yesterday. Water continues to drip even when the tap
            is fully closed. Please have someone inspect and repair
            it.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col justify-end gap-3 sm:flex-row">
        {status === "Pending" && (
          <button
            onClick={() => setStatus("In Progress")}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal-600 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:bg-teal-50"
          >
            <FaSpinner />
            Mark In Progress
          </button>
        )}

        {status === "In Progress" && (
          <button
            onClick={() => setStatus("Resolved")}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
          >
            <FaCheckCircle />
            Resolve Complaint
          </button>
        )}
      </div>
    </div>
  );
}