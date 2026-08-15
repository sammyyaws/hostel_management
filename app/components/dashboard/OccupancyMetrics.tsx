type OccupancyMetric = {
  label: string;
  value: string;
  trend: string;
  positive?: boolean;
};

type OccupancyMetricsProps = {
  metrics?: OccupancyMetric[];
};

const defaultMetrics: OccupancyMetric[] = [
  { label: "Occupied Rooms", value: "214", trend: "+6.4% vs last month", positive: true },
  { label: "Available Beds", value: "38", trend: "-2.1% this week", positive: false },
  { label: "Occupancy Rate", value: "85%", trend: "+4.2% this month", positive: true },
  { label: "Pending Assignments", value: "12", trend: "5 due today", positive: false },
];

export default function OccupancyMetrics({
  metrics = defaultMetrics,
}: OccupancyMetricsProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 shadow-sm"
        >
          <p className="text-sm text-on-surface-variant">{metric.label}</p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <h3 className="text-3xl font-bold text-on-surface">{metric.value}</h3>
            <span
              className={`rounded-full px-2 py-1 text-xs font-medium ${
                metric.positive
                  ? "bg-primary-container text-primary"
                  : "bg-error-container text-on-error-container"
              }`}
            >
              {metric.trend}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
