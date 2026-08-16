import RoomStats from "../../../components/dashboard/admin/RoomStats";
import RoomFilters from "../../../components/dashboard/admin/RoomFilters";
import RoomsTable from "../../../components/dashboard/admin/RoomsTable";

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-surface p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-on-surface md:text-3xl">
            Rooms & Beds
          </h1>

          <p className="mt-1 text-sm text-on-surface-variant">
            Manage rooms, bed spaces and hostel occupancy.
          </p>
        </div>

        {/* Statistics */}
        <RoomStats />

        {/* Rooms */}
        <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-sm">

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

          {/* Filters */}
          <RoomFilters />

          {/* Table */}
          <RoomsTable />

        </section>

      </div>
    </main>
  );
}