import {
  FaBed,
  FaMoneyBillWave,
  FaUsers,
  FaTools,
} from "react-icons/fa";

const stats = [
  {
    title: "Occupancy Rate",
    value: "82%",
    description: "41 of 50 beds occupied",
    icon: FaBed,
  },
  {
    title: "Total Payments",
    value: "GH₵48,500",
    description: "This month",
    icon: FaMoneyBillWave,
  },
  {
    title: "Total Residents",
    value: "41",
    description: "Currently active",
    icon: FaUsers,
  },
  {
    title: "Open Complaints",
    value: "7",
    description: "3 pending · 4 in progress",
    icon: FaTools,
  },
];

export default function ReportStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {stat.value}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {stat.description}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <Icon size={18} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}