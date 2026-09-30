import ComplaintStats from "./ComplaintStats";
import ComplaintFilters from "./ComplaintFilters";
import ComplaintTable from "./ComplaintTable";

type ComplaintsPageProps = {
  basePath?: string;
  showStats?: boolean;
};

export default function ComplaintsPage({
  basePath = "/admin/complaints",
  showStats = true,
}: ComplaintsPageProps) {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Complaints
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage resident complaints and track their resolution.
        </p>
      </div>

      {showStats && <ComplaintStats />}

      <ComplaintFilters />

      <ComplaintTable basePath={basePath} />
    </div>
  );
}