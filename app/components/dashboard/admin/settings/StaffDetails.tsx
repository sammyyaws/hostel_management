"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

type StaffDetailsProps = {
  staffId: string;
};

const staffData: Record<string, any> = {
  "STF-001": {
    id: "STF-001",
    fullName: "Kwame Asante",
    email: "kwame@example.com",
    phone: "024 123 4567",
    role: "Manager",
    status: "Active",
  },
  "STF-002": {
    id: "STF-002",
    fullName: "Daniel Owusu",
    email: "daniel@example.com",
    phone: "055 987 6543",
    role: "Porter",
    status: "Active",
  },
  "STF-003": {
    id: "STF-003",
    fullName: "Michael Mensah",
    email: "michael@example.com",
    phone: "020 456 7890",
    role: "Porter",
    status: "Inactive",
  },
};

function statusStyles(status: string) {
  return status === "Active"
    ? "bg-green-50 text-green-700"
    : "bg-gray-100 text-gray-600";
}

export default function StaffDetails({ staffId }: StaffDetailsProps) {
  const staff = staffData[staffId];

  const [status, setStatus] = useState(staff?.status || "Inactive");
  const [showConfirm, setShowConfirm] = useState(false);

  if (!staff) {
    return (
      <div className="space-y-6 mx-auto max-w-7xl p-4 md:p-8">
        <Link
          href="/admin/settings"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <FaArrowLeft />
          Back to Staff
        </Link>

        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Staff member not found
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            The staff member you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  const handleToggleStatus = () => {
    setStatus(status === "Active" ? "Inactive" : "Active");
    setShowConfirm(false);
  };

  return (
    <div className="space-y-6 mx-auto max-w-7xl p-4 md:p-8">
      {/* Back */}
      <Link
        href="/admin/settings"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <FaArrowLeft />
        Back to Staff
      </Link>

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Staff Details
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage staff member information.
          </p>
        </div>

        <span
          className={`w-fit rounded-full px-3 py-1 text-sm font-medium ${statusStyles(
            status
          )}`}
        >
          {status}
        </span>
      </div>

      {/* Staff Profile */}
      <div className="rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <FaUser size={22} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {staff.fullName}
              </h2>

              <p className="text-sm text-gray-500">
                {staff.role}
              </p>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="grid gap-6 p-6 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <FaUser className="mt-1 text-gray-400" />

            <div>
              <p className="text-xs text-gray-500">Full Name</p>
              <p className="mt-1 font-medium text-gray-900">
                {staff.fullName}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="mt-1 text-gray-400" />

            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="mt-1 font-medium text-gray-900">
                {staff.email}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaPhone className="mt-1 text-gray-400" />

            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="mt-1 font-medium text-gray-900">
                {staff.phone}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaBriefcase className="mt-1 text-gray-400" />

            <div>
              <p className="text-xs text-gray-500">Role</p>
              <p className="mt-1 font-medium text-gray-900">
                {staff.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Account Access */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Account Access
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Control whether this staff member can access the hostel system.
        </p>

        <div className="mt-6 flex items-center justify-between rounded-lg bg-gray-50 p-4">
          <div>
            <p className="font-medium text-gray-900">
              Account Status
            </p>

            <p className="mt-1 text-sm text-gray-500">
              {status === "Active"
                ? "This staff member can access the system."
                : "This staff member cannot access the system."}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowConfirm(true)}
            className="text-teal-600 hover:text-teal-700"
          >
            {status === "Active" ? (
              <FaToggleOn size={38} />
            ) : (
              <FaToggleOff size={38} />
            )}
          </button>
        </div>
      </div>

      {/* Confirmation */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-gray-900">
              {status === "Active"
                ? "Deactivate Staff Member?"
                : "Activate Staff Member?"}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {status === "Active"
                ? `${staff.fullName} will no longer be able to access the hostel management system.`
                : `${staff.fullName} will regain access to the hostel management system.`}
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleToggleStatus}
                className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700"
              >
                {status === "Active" ? "Deactivate" : "Activate"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}