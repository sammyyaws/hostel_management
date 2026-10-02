interface BedStatusLegendProps {
  showSelected?: boolean;
}

export default function BedStatusLegend({
  showSelected = true,
}: BedStatusLegendProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 border-t border-outline-variant pt-4">
      <Legend
        className="border-2 border-primary bg-white"
        label="Available Bed"
      />

      {showSelected && (
        <Legend
          className="border-2 border-primary bg-primary"
          label="Selected by You"
        />
      )}

      <Legend
        className="bg-outline-variant"
        label="Reserved / Occupied"
      />
    </div>
  );
}

function Legend({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-3.5 w-3.5 rounded-full ${className}`} />

      <span className="text-xs text-on-surface-variant">
        {label}
      </span>
    </div>
  );
}