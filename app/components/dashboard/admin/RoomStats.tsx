import {
  FaBed,
  FaDoorOpen,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const stats = [
  {
    label: "Total Rooms",
    value: "125",
    icon: FaDoorOpen,
  },
  {
    label: "Total Beds",
    value: "500",
    icon: FaBed,
  },
  {
    label: "Occupied Beds",
    value: "463",
    icon: FaUsers,
  },
  {
    label: "Available Beds",
    value: "37",
    icon: FaCheckCircle,
  },
];

export default function RoomStats() {
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