import {
  FaUsers,
  FaUserCheck,
  FaClock,
  FaExclamationCircle,
} from "react-icons/fa";

const stats = [
  {
    label: "Total Residents",
    value: "463",
    icon: FaUsers,
  },
  {
    label: "Active Residents",
    value: "450",
    icon: FaUserCheck,
  },
  {
    label: "Pending Applications",
    value: "13",
    icon: FaClock,
  },
  {
    label: "Outstanding Payments",
    value: "28",
    icon: FaExclamationCircle,
  },
];

export default function ResidentStats() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-on-surface-variant">
                  {stat.label}
                </p>

                <p className="mt-3 text-3xl font-bold text-on-surface">
                  {stat.value}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-container text-primary">
                <Icon />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}