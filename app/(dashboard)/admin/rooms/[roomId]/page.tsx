import RoomHeader from "../../../../components/dashboard/admin/RoomHeader";
import BedGrid from "../../../../components/dashboard/admin/BedGrid";

type RoomPageProps = {
  params: Promise<{
    roomId: string;
  }>;
};

export default async function RoomDetailsPage({
  params,
}: RoomPageProps) {
  const { roomId } = await params;

  return (
    <main className="min-h-screen bg-surface p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">

        <RoomHeader roomId={roomId} />

        <BedGrid />

      </div>
    </main>
  );
}