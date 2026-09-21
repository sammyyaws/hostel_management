import { FaSearch } from "react-icons/fa";

export default function AnnouncementFilters() {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center">
      <div className="relative flex-1">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400" />

        <input
          type="text"
          placeholder="Search announcements..."
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-teal-500"
        />
      </div>

      <select className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-teal-500">
        <option>All Status</option>
        <option>Published</option>
        <option>Scheduled</option>
        <option>Draft</option>
      </select>

      <select className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-teal-500">
        <option>All Audiences</option>
        <option>All Residents</option>
        <option>Block A</option>
        <option>Block B</option>
        <option>Block C</option>
        <option>Managers</option>
        <option>Porters</option>
      </select>
    </div>
  );
}