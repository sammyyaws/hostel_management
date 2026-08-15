type OccupancyMetricsProps = {
  residents?: number;
  occupiedBeds?: number;
  vacantBeds?: number;
  totalBeds?: number;
  occupancy?: number;
};

export default function OccupancyMetrics({
  residents = 463,
  occupiedBeds = 463,
  vacantBeds = 37,
  totalBeds = 500,
  occupancy = 92.6,
}: OccupancyMetricsProps) {
  return (
    <section tabIndex={0} className="rounded-2xl bg-surface-container-lowest p-6 shadow-md transition-shadow duration-200 ease-in-out hover:shadow-lg focus:outline-none focus:shadow-lg">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-on-surface">
          Occupancy Metrics
        </h2>

        <span className="rounded-full bg-tertiary-container/20 px-3 py-1 text-xs font-semibold text-tertiary">
          Live Status
        </span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-6 xl:grid-cols-4">

        <Metric
          label="Residents"
          value={residents}
        />

        <Metric
          label="Occupied Beds"
          value={occupiedBeds}
        />

        <Metric
          label="Vacant Beds"
          value={vacantBeds}
          highlight
        />

        <Metric
          label="Occupancy"
          value={`${occupancy}%`}
          primary
        />

      </div>

      {/* Progress */}
      <div className="mt-8">

        <div className="flex h-3 w-full overflow-hidden rounded-full bg-surface-container">
          <div
            className="h-full bg-primary"
            style={{ width: `${occupancy}%` }}
          />

          <div
            className="h-full bg-secondary-container"
            style={{ width: `${100 - occupancy}%` }}
          />
        </div>

        <div className="mt-2 flex justify-between text-xs text-on-surface-variant">
          <span>0</span>
          <span>Target: 95%</span>
          <span>{totalBeds} Total Beds</span>
        </div>

      </div>

    </section>
  );
}

type MetricProps = {
  label: string;
  value: string | number;
  highlight?: boolean;
  primary?: boolean;
};

function Metric({
  label,
  value,
  highlight,
  primary,
}: MetricProps) {
  return (
    <div className="flex flex-col">
      <span className="mb-1 text-xs text-on-surface-variant">
        {label}
      </span>

      <span
        className={`text-2xl font-bold ${
          primary
            ? "text-primary"
            : highlight
              ? "text-secondary"
              : "text-on-surface"
        }`}
      >
        {value}
      </span>
    </div>
  );
}