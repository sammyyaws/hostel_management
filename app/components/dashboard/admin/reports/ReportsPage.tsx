import ReportStats from "./ReportStats";
import ReportFilters from "./ReportFilters";
import ReportTable from "./ReportTable";

export default function ReportsPage() {
  return (
    <div className="space-y-6 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Reports
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          View and analyze hostel performance reports.
        </p>
      </div>

      <ReportStats />

      <ReportFilters />

      <ReportTable />
    </div>
  );
}