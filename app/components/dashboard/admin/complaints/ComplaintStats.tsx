import {
  FaComments,
  FaClock,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Complaints",
    value: "48",
    icon: FaComments,
  },
  {
    title: "Pending",
    value: "12",
    icon: FaClock,
  },
  {
    title: "In Progress",
    value: "9",
    icon: FaSpinner,
  },
  {
    title: "Resolved",
    value: "27",
    icon: FaCheckCircle,
  },
];

export default function ComplaintStats() {
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