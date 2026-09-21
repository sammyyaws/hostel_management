import ComplaintStats from "./ComplaintStats";
import ComplaintFilters from "./ComplaintFilters";
import ComplaintTable from "./ComplaintTable";
export default function ComplaintsPage() {
  return (
    <div className="space-y-6  mx-auto max-w-07xl px-4 py-6 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Complaints
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage resident complaints and track their resolution.
        </p>
      </div>

      <ComplaintStats />

      <ComplaintFilters />

      <ComplaintTable />
    </div>
  );
}