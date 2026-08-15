import DashboardHeader from "./DashboardHeader";
import OccupancyMetrics from "./OccupancyMetrics";
import FinancialOverview from "./FinancialOverview";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";

export default function AdminDashboard() {
  return (
    <main className="flex-1 bg-surface p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <DashboardHeader
          title="Admin Dashboard"
          subtitle="Monitor occupancy, payments, and daily hostel operations."
          actions={
            <button
              type="button"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-on-primary shadow-sm transition-opacity hover:opacity-90"
            >
              + New Listing
            </button>
          }
        />

        <div className="space-y-6">
          <OccupancyMetrics />

          <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
            <FinancialOverview />
            <RecentActivity />
          </div>

          <QuickActions />
        </div>
      </div>
    </main>
  );
}
