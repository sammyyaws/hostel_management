type ActivityItem = {
  title: string;
  time: string;
  detail: string;
  tone?: "success" | "warning" | "info";
};

type RecentActivityProps = {
  items?: ActivityItem[];
};

const defaultItems: ActivityItem[] = [
  { title: "Payment received", time: "10 mins ago", detail: "Room 204 - GH₵ 3,200 confirmed", tone: "success" },
  { title: "Maintenance request", time: "1 hour ago", detail: "Water heater issue reported on Floor 2", tone: "warning" },
  { title: "New allocation", time: "3 hours ago", detail: "2 bed spaces assigned to new applicants", tone: "info" },
  { title: "Late fee reminder", time: "Today", detail: "3 students sent overdue payment notice", tone: "warning" },
];

export default function RecentActivity({
  items = defaultItems,
}: RecentActivityProps) {
  return (
    <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-on-surface">Recent Activity</h3>
        <button type="button" className="text-sm font-medium text-primary">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={`${item.title}-${item.time}`} className="flex gap-3 rounded-xl bg-surface p-3">
            <div
              className={`mt-1 h-3 w-3 rounded-full ${
                item.tone === "success"
                  ? "bg-primary"
                  : item.tone === "warning"
                    ? "bg-secondary"
                    : "bg-tertiary"
              }`}
            />

            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="font-medium text-on-surface">{item.title}</p>
                <span className="text-xs text-on-surface-variant">{item.time}</span>
              </div>
              <p className="mt-1 text-sm text-on-surface-variant">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
