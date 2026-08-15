import OccupancyMetrics from "./OccupancyMetrics";
import FinancialOverview from "./FinancialOverview";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-surface p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Page Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-on-surface md:text-3xl">
              Dashboard Overview
            </h1>

            <p className="mt-1 text-sm text-on-surface-variant">
              System status and key metrics for TYB Hostel.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2 text-sm font-medium text-on-surface transition hover:bg-surface-container">
              Export Report
            </button>

            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-container">
              + New Allocation
            </button>
          </div>
        </div>

        {/* Occupancy */}
        <OccupancyMetrics />

        {/* Financial + Activity */}
        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <FinancialOverview />
          <RecentActivity />
        </div>

        {/* Quick Actions */}
        <QuickActions />

      </div>
    </main>
  );
}