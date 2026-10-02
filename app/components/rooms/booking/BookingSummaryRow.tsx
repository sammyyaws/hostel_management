interface BookingSummaryRowProps {
  label: string;
  value: React.ReactNode;
}

export default function BookingSummaryRow({
  label,
  value,
}: BookingSummaryRowProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-on-surface-variant">
        {label}
      </span>

      <span className="text-right text-sm text-on-surface">
        {value}
      </span>
    </div>
  );
}