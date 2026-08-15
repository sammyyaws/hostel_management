import ResidentStats from "../../../components/dashboard/admin/ResidentStats";
import ResidentsTable from "../../../components/dashboard/admin/ResidentsTable";

export default function ResidentsPage() {
  return (
    <main className="min-h-screen bg-surface p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-on-surface md:text-3xl">
            Residents
          </h1>

          <p className="mt-1 text-sm text-on-surface-variant">
            Manage hostel residents, room assignments and payment status.
          </p>
        </div>

        {/* Stats */}
        <ResidentStats />

        {/* Residents */}
        <ResidentsTable />

      </div>
    </main>
  );
}