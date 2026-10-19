
"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";

import BookingEmailModal from "@/app/components/rooms/bookings/BookingEmailModal";
import BookingRoomDetails from "@/app/components/rooms/bookings/BookingRoomDetails";
import BedSelector, {
  type BookingBed,
} from "@/app/components/rooms/bookings/BedSelector";
import BookingSummary from "@/app/components/rooms/bookings/BookingSummary";

const activeStatuses = [
  "Pending Payment",
  "Payment Proof Submitted",
  "Confirmed",
];

export default function RoomBookingPage() {
  const params = useParams<{ id: string }>();
  const roomId = Number(params.id);

  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const room = useAppSelector((state) =>
    state.rooms.rooms.find((item) => item.id === roomId)
  );

  const bookings = useAppSelector((state) => state.bookings.bookings);

  const [selectedBed, setSelectedBed] = useState<string | null>(null);

  const beds = useMemo<BookingBed[]>(() => {
    if (!room) return [];

    return Array.from({ length: room.capacity }, (_, index) => {
      const bedNumber = index + 1;
      const bedId = `bed-${bedNumber}`;

      const existingBooking = bookings.find(
        (booking) =>
          booking.roomId === room.id &&
          booking.bedId === bedId &&
          activeStatuses.includes(booking.status)
      );

      let status: BookingBed["status"];

      if (existingBooking) {
        status = "Reserved";
      } else if (bedNumber <= room.occupied) {
        status = "Occupied";
      } else if (
        room.status !== "Available" ||
        bedNumber > room.occupied + room.available
      ) {
        status = "Occupied";
      } else {
        status = "Available";
      }

      return {
        id: bedId,
        label: `Bed ${bedNumber}`,
        status,
      };
    });
  }, [room, bookings]);

  if (!room) {
    return (
      <main className="mx-auto max-w-3xl p-6">
        <h1 className="text-2xl font-bold">Room not found</h1>
        <p className="mt-2 text-gray-500">
          This room may have been removed or the link may be incorrect.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto my-12 max-w-5xl space-y-6 p-4 sm:p-6">
      <header>
        <p className="text-sm font-medium text-teal-600">
          TYB Student Portal
        </p>

        <h1 className="mt-1 text-3xl font-bold text-gray-900">
          Book {room.room}
        </h1>

        <p className="mt-2 text-gray-500">
          Review the room and choose an available bed.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <BookingRoomDetails room={room} />

          <BedSelector
            beds={beds}
            selectedBed={selectedBed}
            onSelect={setSelectedBed}
          />
        </div>

        <BookingSummary
          roomName={room.room}
          price={room.price}
          selectedBedLabel={
            beds.find((bed) => bed.id === selectedBed)?.label ?? null
          }
          onSubmit={() => {
            const bed = beds.find((item) => item.id === selectedBed);

            if (!bed || bed.status !== "Available") return;

            setIsEmailModalOpen(true);
          }}
        />
      </section>

      <BookingEmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        roomId={room.id}
        bedId={selectedBed ?? ""}
      />
    </main>
  );
}

