import RoomStats from "../../../components/dashboard/admin/rooms/RoomStats";
import RoomFilters from "../../../components/dashboard/admin/rooms/RoomFilters";
import RoomsTable from "../../../components/dashboard/admin/rooms/RoomsTable";
import Link from "next/link";
type RoomsPageProps = {
  basePath?: string;
};
export default function RoomsPage({
  basePath = "/admin/rooms",
}: RoomsPageProps) {
  return (
    <main className="min-h-screen bg-surface p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-on-surface md:text-3xl">
              Rooms & Beds
            </h1>

            <p className="mt-1 text-sm text-on-surface-variant">
              Manage rooms, bed spaces and hostel occupancy.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <Link href={`${basePath}/add`}>Add Room</Link>
          </button>
        </div>

        <RoomStats />

        <section className="rounded-2xl border border-gray-200 bg-surface-container-lowest shadow-sm">

          <div className="border-b border-outline-variant p-5">
            <div>
              <h2 className="text-xl font-semibold text-on-surface">
                All Rooms
              </h2>

              <p className="mt-1 text-sm text-on-surface-variant">
                View room capacity and current bed availability.
              </p>
            </div>
          </div>

          <RoomFilters />

          <RoomsTable basePath={basePath} />

        </section>

      </div>
    </main>
  );
}