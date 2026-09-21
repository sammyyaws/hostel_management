import {
  FaBullhorn,
  FaCheckCircle,
  FaClock,
  FaFileAlt,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Announcements",
    value: "24",
    icon: FaBullhorn,
  },
  {
    title: "Published",
    value: "18",
    icon: FaCheckCircle,
  },
  {
    title: "Scheduled",
    value: "3",
    icon: FaClock,
  },
  {
    title: "Drafts",
    value: "3",
    icon: FaFileAlt,
  },
];

export default function AnnouncementStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {stat.value}
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <Icon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}