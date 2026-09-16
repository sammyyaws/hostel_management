const stats = [
  {
    label: "Total Allocations",
    value: "463",
  },
  {
    label: "Active",
    value: "438",
  },
  {
    label: "Pending",
    value: "18",
  },
  {
    label: "Cancelled",
    value: "7",
  },
];

export default function AllocationStats() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 shadow-sm"
        >
          <p className="text-sm text-on-surface-variant">
            {stat.label}
          </p>

          <p className="mt-3 text-3xl font-bold text-on-surface">
            {stat.value}
          </p>
        </div>
      ))}
    </section>
  );
}