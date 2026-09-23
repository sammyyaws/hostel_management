"use client";

import OccupancyMetrics from "@/components/dashboard/admin/OccupancyMetrics";
import RecentActivity from "@/components/dashboard/admin/RecentActivity";
import QuickActions from "@/components/dashboard/admin/QuickActions";
import {
  FaUsers,
  FaBed,
  FaWallet,
  FaComments,
} from "react-icons/fa";

export default function PorterDashboard() {
  const porterActivities = [
    {
      title: "Payment proof submitted",
      time: "10 mins ago",
      detail: "Room 204 - Payment awaiting verification",
      tone: "warning" as const,
    },
    {
      title: "Complaint reported",
      time: "1 hour ago",
      detail: "Water heater issue reported on Floor 2",
      tone: "warning" as const,
    },
    {
      title: "New allocation",
      time: "3 hours ago",
      detail: "Room 105 - 2 bed spaces assigned",
      tone: "info" as const,
    },
    {
      title: "Resident registered",
      time: "Today",
      detail: "New resident added to Block A",
      tone: "success" as const,
    },
  ];

  const porterActions = [
    {
      title: "Manage Residents",
      description: "View and manage hostel residents",
      icon: FaUsers,
    },
    {
      title: "Rooms & Beds",
      description: "Check room and bed availability",
      icon: FaBed,
    },
    {
      title: "Verify Payments",
      description: "Review submitted payment proofs",
      icon: FaWallet,
    },
    {
      title: "Complaints",
      description: "Review and manage complaints",
      icon: FaComments,
    },
  ];

  return (
    <div className="space-y-6 mx-auto max-w-7xl p-4 md:p-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-on-surface">
          Porter Dashboard
        </h1>

        <p className="mt-1 text-sm text-on-surface-variant">
          Manage residents, rooms, allocations and hostel activities.
        </p>
      </div>

      {/* Occupancy */}
      <OccupancyMetrics
        residents={463}
        occupiedBeds={463}
        vacantBeds={37}
        totalBeds={500}
        occupancy={92.6}
      />

      {/* Activity + Actions */}
      <div className="grid gap-6 xl:grid-cols-2">
        <RecentActivity items={porterActivities} />

        <QuickActions actions={porterActions} />
      </div>

    </div>
  );
}