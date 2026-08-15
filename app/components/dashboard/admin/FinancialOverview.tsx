type FinancialItem = {
  label: string;
  value: string;
  change: string;
};

type FinancialOverviewProps = {
  totalRevenue?: string;
  paymentsDue?: string;
  expenses?: string;
  items?: FinancialItem[];
};

const defaultItems: FinancialItem[] = [
  { label: "Room Revenue", value: "GH₵ 128,400", change: "+12.5%" },
  { label: "Utility Bills", value: "GH₵ 42,610", change: "+3.1%" },
  { label: "Maintenance", value: "GH₵ 16,200", change: "-2.6%" },
];

export default function FinancialOverview({
  totalRevenue = "GH₵ 256,900",
  paymentsDue = "GH₵ 38,750",
  expenses = "GH₵ 61,040",
  items = defaultItems,
}: FinancialOverviewProps) {
  return (
    <section tabIndex={0} className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm transition-colors duration-200 ease-in-out hover:border-primary focus:outline-none focus:border-primary">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-on-surface-variant">Financial Overview</p>
          <h3 className="mt-1 text-2xl font-bold text-on-surface">{totalRevenue}</h3>
        </div>

        <div className="rounded-full bg-secondary-container px-3 py-1 text-sm font-medium text-on-secondary-container">
          +8.2% MoM
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-surface p-4">
          <p className="text-sm text-on-surface-variant">Payments Due</p>
          <p className="mt-2 text-xl font-semibold text-on-surface">{paymentsDue}</p>
        </div>

        <div className="rounded-xl bg-surface p-4">
          <p className="text-sm text-on-surface-variant">Expenses</p>
          <p className="mt-2 text-xl font-semibold text-on-surface">{expenses}</p>
        </div>

        <div className="rounded-xl bg-surface p-4">
          <p className="text-sm text-on-surface-variant">Net Cash Flow</p>
          <p className="mt-2 text-xl font-semibold text-primary">GH₵ 195,860</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            tabIndex={0}
            className="flex items-center justify-between rounded-xl border border-outline-variant bg-surface p-3 transition-colors duration-200 ease-in-out hover:border-primary focus:outline-none focus:border-primary focus:shadow-sm"
          >
            <span className="text-sm text-on-surface-variant">{item.label}</span>
            <div className="text-right">
              <p className="font-semibold text-on-surface">{item.value}</p>
              <p className="text-xs text-primary">{item.change}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
