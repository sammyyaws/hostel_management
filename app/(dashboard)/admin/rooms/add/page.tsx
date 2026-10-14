
"use client";

import { useRouter } from "next/navigation";

import AddRoomForm, {
  type AddRoomFormValues,
} from "@/app/components/dashboard/rooms/AddRoomForm";
import { useAppDispatch } from "@/lib/hooks";
import { addRoom } from "@/features/rooms/roomsSlice";

export default function AdminAddRoomPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddRoom = async (values: AddRoomFormValues) => {
    const capacity = Number(values.capacity);

    dispatch(
      addRoom({
        id: Date.now(),
        room: values.roomName.trim(),
        block: values.block.trim(),
        floor: values.floor.trim(),
        roomType: values.roomType.trim(),
        price: Number(values.price),
        capacity,
        occupied: 0,
        available: capacity,
        status: "Available",
        bedroomPhotos: values.bedroomPhotos,
        kitchenPhotos: values.kitchenPhotos,
        washroomPhotos: values.washroomPhotos,
        published: values.published,
      })
    );

    router.push("/admin/rooms");
  };

  return (
    <main className="min-h-screen bg-surface p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <button
          type="button"
          onClick={() => router.push("/admin/rooms")}
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Back to Rooms
        </button>

        <div>
          <h1 className="text-2xl font-bold text-on-surface md:text-3xl">
            Add Room
          </h1>
          <p className="mt-1 text-sm text-on-surface-variant">
            Add a room, its facilities, pricing and photos.
          </p>
        </div>

        <section className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 shadow-sm md:p-8">
          <AddRoomForm onSubmit={handleAddRoom} />
        </section>
      </div>
    </main>
  );
}