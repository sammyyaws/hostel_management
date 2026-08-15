type Action = {
  title: string;
  description: string;
  icon?: string;
};

type QuickActionsProps = {
  actions?: Action[];
};

const defaultActions: Action[] = [
  { title: "Add Room", description: "Create a new room listing", icon: "+" },
  { title: "Manage Students", description: "Review applicants and residents", icon: "👥" },
  { title: "Payments", description: "Track invoices and collections", icon: "💳" },
  { title: "Reports", description: "Generate occupancy and revenue reports", icon: "📊" },
];

export default function QuickActions({
  actions = defaultActions,
}: QuickActionsProps) {
  return (
    <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-on-surface">Quick Actions</h3>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {actions.map((action) => (
          <button
            key={action.title}
            type="button"
            className="flex items-start gap-3 rounded-xl border border-outline-variant bg-surface p-4 text-left transition-colors hover:bg-surface-variant"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container text-lg text-primary">
              {action.icon ?? "•"}
            </div>
            <div>
              <p className="font-semibold text-on-surface">{action.title}</p>
              <p className="mt-1 text-sm text-on-surface-variant">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
