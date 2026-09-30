"use client";

import {
  FaBed,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaDoorOpen,
  FaUsers,
} from "react-icons/fa";

interface Roommate {
  id: number;
  name: string;
  bed: string;
}

export interface AccommodationData {
  status: "Active" | "Pending" | "Inactive";
  hostel: string;
  block: string;
  room: string;
  bed: string;
  roomType: string;
  academicYear: string;
  allocationDate: string;
  roommates: Roommate[];
}

interface AccommodationOverviewProps {
  accommodation: AccommodationData;
}

export default function AccommodationOverview({
  accommodation,
}: AccommodationOverviewProps) {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#191c1d]">
              My Accommodation
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              View your current hostel accommodation and room allocation.
            </p>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-full w-fit">
            <FaCheckCircle className="text-sm" />
            <span className="text-sm font-semibold">
              {accommodation.status}
            </span>
          </div>
        </div>
      </header>

      {/* Main Accommodation Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-6">
        {/* Card Header */}
        <div className="bg-[#00535b] px-6 py-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <FaBed className="text-xl" />
            </div>

            <div>
              <p className="text-sm text-white/70">Current Allocation</p>

              <h2 className="text-2xl font-bold">
                {accommodation.room} · {accommodation.bed}
              </h2>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hostel */}
            <div>
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <FaBuilding className="text-sm" />
                <span className="text-xs uppercase tracking-wider">
                  Hostel
                </span>
              </div>

              <p className="font-semibold text-gray-900">
                {accommodation.hostel}
              </p>
            </div>

            {/* Block */}
            <div>
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <FaBuilding className="text-sm" />
                <span className="text-xs uppercase tracking-wider">
                  Block
                </span>
              </div>

              <p className="font-semibold text-gray-900">
                {accommodation.block}
              </p>
            </div>

            {/* Room Type */}
            <div>
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <FaDoorOpen className="text-sm" />
                <span className="text-xs uppercase tracking-wider">
                  Room Type
                </span>
              </div>

              <p className="font-semibold text-gray-900">
                {accommodation.roomType}
              </p>
            </div>

            {/* Academic Year */}
            <div>
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <FaCalendarAlt className="text-sm" />
                <span className="text-xs uppercase tracking-wider">
                  Academic Year
                </span>
              </div>

              <p className="font-semibold text-gray-900">
                {accommodation.academicYear}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Allocation Information */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#006d77]/10 text-[#00535b] flex items-center justify-center">
              <FaCalendarAlt />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Allocation Information
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Details about your current allocation
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between gap-4 py-3 border-b border-gray-100">
              <span className="text-sm text-gray-500">
                Allocation Date
              </span>

              <span className="text-sm font-medium text-gray-900">
                {accommodation.allocationDate}
              </span>
            </div>

            <div className="flex justify-between gap-4 py-3 border-b border-gray-100">
              <span className="text-sm text-gray-500">
                Room
              </span>

              <span className="text-sm font-medium text-gray-900">
                {accommodation.room}
              </span>
            </div>

            <div className="flex justify-between gap-4 py-3">
              <span className="text-sm text-gray-500">
                Assigned Bed
              </span>

              <span className="text-sm font-medium text-gray-900">
                {accommodation.bed}
              </span>
            </div>
          </div>
        </div>

        {/* Roommates */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#fcab29]/15 text-[#694300] flex items-center justify-center">
              <FaUsers />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                Roommates
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Students assigned to your room
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {accommodation.roommates.length > 0 ? (
              accommodation.roommates.map((roommate) => (
                <div
                  key={roommate.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#00535b] text-white flex items-center justify-center text-sm font-semibold">
                      {roommate.name.charAt(0)}
                    </div>

                    <span className="text-sm font-medium text-gray-900">
                      {roommate.name}
                    </span>
                  </div>

                  <span className="text-xs text-gray-500">
                    {roommate.bed}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                No roommates assigned.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}