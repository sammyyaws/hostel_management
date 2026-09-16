type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles =
    status === "Confirmed" || status === "Allocated" || status === "Active"
      ? "bg-green-50 text-green-700"
      : status === "Rejected" || status === "Cancelled"
      ? "bg-red-50 text-red-700"
      : "bg-yellow-50 text-yellow-700";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${styles}`}
    >
      {status}
    </span>
  );
}