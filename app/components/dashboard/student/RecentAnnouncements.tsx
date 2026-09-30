import { FaBullhorn } from "react-icons/fa";

export interface Announcement {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface RecentAnnouncementsProps {
  announcements: Announcement[];
  onViewAll?: () => void;
}

export default function RecentAnnouncements({
  announcements,
  onViewAll,
}: RecentAnnouncementsProps) {
  return (
    <section>
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Recent Announcements
        </h2>

        <button
          onClick={onViewAll}
          className="text-xs font-semibold text-[#00535b] hover:underline"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors cursor-pointer flex gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-full bg-[#006d77]/10 text-[#00535b] flex items-center justify-center shrink-0">
              <FaBullhorn />
            </div>

            <div>
              <span className="text-xs text-gray-500 block mb-1">
                {announcement.date}
              </span>

              <h3 className="text-sm font-semibold text-gray-900">
                {announcement.title}
              </h3>

              <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                {announcement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}