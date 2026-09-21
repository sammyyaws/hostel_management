import { FaPlus } from "react-icons/fa";
import Link from "next/link";

import AnnouncementStats from "./AnnouncementStats";
import AnnouncementFilters from "./AnnouncementFilters";
import AnnouncementTable from "./AnnouncementTable";

export default function AnnouncementsPage() {
  return (
    <div className="space-y-6 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Announcements
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage hostel announcements and communicate with residents.
          </p>
        </div>

        <Link
          href="/admin/announcements/create"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          <FaPlus />
          Create Announcement
        </Link>
      </div>

      <AnnouncementStats />

      <AnnouncementFilters />

      <AnnouncementTable />
    </div>
  );
}