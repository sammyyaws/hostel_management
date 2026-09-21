"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaArrowLeft,
  FaBullhorn,
  FaCalendarAlt,
  FaUsers,
  FaEdit,
} from "react-icons/fa";

type AnnouncementDetailsProps = {
  announcementId: string;
};

export default function AnnouncementDetails({
  announcementId,
}: AnnouncementDetailsProps) {
  const [status, setStatus] = useState("Published");

  return (
    <div className="space-y-6 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div>
        <Link
          href="/admin/announcements"
          className="mb-4 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600"
        >
          <FaArrowLeft />
          Back to Announcements
        </Link>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Announcement Details
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {announcementId}
            </p>
          </div>

          <span
            className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${
              status === "Published"
                ? "bg-green-50 text-green-700"
                : status === "Draft"
                ? "bg-gray-100 text-gray-600"
                : "bg-yellow-50 text-yellow-700"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Announcement information */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Basic information */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
              <FaBullhorn />
            </div>

            <h2 className="font-semibold text-gray-900">
              Announcement Information
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500">Title</p>

              <p className="mt-1 text-sm font-medium text-gray-900">
                Water Supply Maintenance
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Audience</p>

              <p className="mt-1 flex items-center gap-2 text-sm text-gray-700">
                <FaUsers className="text-gray-400" />
                All Residents
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Published Date</p>

              <p className="mt-1 flex items-center gap-2 text-sm text-gray-700">
                <FaCalendarAlt className="text-gray-400" />
                September 20, 2026
              </p>
            </div>
          </div>
        </div>

        {/* Additional information */}
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="mb-5 font-semibold text-gray-900">
            Publication Information
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500">Announcement ID</p>

              <p className="mt-1 text-sm font-medium text-gray-900">
                {announcementId}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Created By</p>

              <p className="mt-1 text-sm text-gray-700">
                Hostel Administrator
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Status</p>

              <p className="mt-1 text-sm text-gray-700">
                {status}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Announcement content */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-4 font-semibold text-gray-900">
          Announcement Content
        </h2>

        <div className="rounded-lg bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-gray-900">
            Water Supply Maintenance
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-700">
            Residents are hereby informed that there will be
            scheduled maintenance on the hostel water supply
            system. Water service may be temporarily unavailable
            while the maintenance work is being carried out.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-700">
            Residents are encouraged to store enough water ahead
            of the maintenance period. We apologize for any
            inconvenience caused.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col justify-end gap-3 sm:flex-row">
        <button
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <FaEdit />
          Edit Announcement
        </button>

        {status === "Draft" && (
          <button
            onClick={() => setStatus("Published")}
            className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
          >
            Publish Announcement
          </button>
        )}
      </div>
    </div>
  );
}