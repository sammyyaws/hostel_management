
import type { Room } from "@/features/rooms/roomsSlice";

interface BookingRoomDetailsProps {
  room: Room;
}

export default function BookingRoomDetails({
  room,
}: BookingRoomDetailsProps) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          {room.room}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {room.block} · {room.floor}
        </p>
        <p className="mt-1 text-sm text-gray-500">{room.roomType}</p>
      </div>

      <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
        {room.available} bed spaces available
      </span>
    </div>
  );
}
