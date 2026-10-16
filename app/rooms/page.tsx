
"use client";

import RoomCard from "../components/UIComponents/RoomCard";
import { useAppSelector } from "@/lib/hooks";

const fallbackImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDOL6BALdS3uaSUABqbVASqyyOQ-sf0T5-F_t0ZpbaK6BnPAbiiloEONXzF_dA_4ZF3WjFBmud8P_puBygQOZEvuzd0TShk8drFTbM_8PzJfq1WEyarIzCaCeOhTCC7kxjWO6lYEs8lSDQMQHZB-TLcSqvAR69E6t-bkJbQh-4";

export default function RoomsPage() {
  const rooms = useAppSelector((state) => state.rooms.rooms);

  // Only display rooms students can currently book.
  const availableRooms = rooms.filter(
    (room) =>
      room.published &&
      room.status === "Available" &&
      room.available > 0
  );

  return (
    <main className="mx-auto w-full max-w-7xl flex-grow px-4 pb-12 pt-24 sm:px-6 lg:px-container-padding">
      <div className="mb-12 text-center md:text-left">
        <h1 className="mb-4 font-headline-lg text-headline-lg text-primary">
          Available Accommodations
        </h1>

        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Explore our available rooms and find accommodation that suits
          your needs and budget.
        </p>
      </div>

      {availableRooms.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {availableRooms.map((room) => (
            <div key={room.id} className="mb-6 px-2 md:mb-0 md:px-0">
              <RoomCard
                title={room.room}
                price={`GH₵ ${room.price.toLocaleString()}`}
                period="/ academic year"
                features={[
                  room.roomType,
                  `${room.block} • ${room.floor}`,
                  `${room.available} bed spaces available`,
                ]}
                image={room.bedroomPhotos[0] || fallbackImage}
                badge="Available"
                badgeVariant="success"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-outline-variant p-10 text-center">
          <h2 className="text-lg font-semibold text-on-surface">
            No rooms available
          </h2>

          <p className="mt-2 text-sm text-on-surface-variant">
            There are currently no published rooms available for booking.
            Please check again later.
          </p>
        </div>
      )}

      <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-xl bg-primary-container p-8 text-on-primary-container shadow-sm md:flex-row">
        <div>
          <h3 className="mb-2 font-headline-sm text-headline-sm">
            Need help choosing?
          </h3>

          <p className="font-body-md text-body-md opacity-90">
            Our housing advisors are available to help you find the right
            accommodation.
          </p>
        </div>

        <button
          type="button"
          className="whitespace-nowrap rounded-lg bg-on-primary-container px-6 py-3 font-label-md text-label-md text-primary-container transition-colors hover:bg-primary-fixed"
        >
          Contact Advisor
        </button>
      </div>
    </main>
  );
}
