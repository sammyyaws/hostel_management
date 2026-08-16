import AllocationStats from "../../../components/dashboard/admin/AllocationStats";
import AllocationFilters from "../../../components/dashboard/admin/AllocationFilters";
import AllocationsTable from "../../../components/dashboard/admin/AllocationsTable";

export default function AllocationsPage() {
  return (
    <main className="min-h-screen bg-surface p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-on-surface">
            Allocations
          </h1>

          <p className="mt-1 text-sm text-on-surface-variant">
            Manage student room and bed assignments.
          </p>
        </div>

        <AllocationStats />

        <AllocationFilters />

        <AllocationsTable />

      </div>
    </main>
  );
}