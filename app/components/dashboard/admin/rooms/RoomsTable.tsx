"use client";

import {
  FaEllipsisV,
  FaBed,
  FaEye,
} from "react-icons/fa";


import Link from "next/link";
type Room = {
  id: number;
  room: string;
  block: string;
  floor: string;
  capacity: number;
  occupied: number;
  available: number;
  status: "Available" | "Full" | "Maintenance";
};

const rooms: Room[] = [
  {
    id: 1,
    room: "A102",
    block: "Block A",
    floor: "1st Floor",
    capacity: 4,
    occupied: 3,
    available: 1,
    status: "Available",
  },
  {
    id: 2,
    room: "A103",
    block: "Block A",
    floor: "1st Floor",
    capacity: 4,
    occupied: 4,
    available: 0,
    status: "Full",
  },
  {
    id: 3,
    room: "B204",
    block: "Block B",
    floor: "2nd Floor",
    capacity: 4,
    occupied: 2,
    available: 2,
    status: "Available",
  },
  {
    id: 4,
    room: "B205",
    block: "Block B",
    floor: "2nd Floor",
    capacity: 4,
    occupied: 4,
    available: 0,
    status: "Full",
  },
  {
    id: 5,
    room: "C105",
    block: "Block C",
    floor: "1st Floor",
    capacity: 2,
    occupied: 0,
    available: 2,
    status: "Maintenance",
  },
];

export default function RoomsTable() {
  return (
    <div className="overflow-x-auto">

      <table className="w-full min-w-[850px]">

        <thead>
          <tr className="border-b border-outline-variant bg-surface-container-low text-left">

            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Room
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Location
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Capacity
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Occupied
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Available
            </th>

            <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-on-surface-variant">
              Status
            </th>

            <th className="px-5 py-4" />

          </tr>
        </thead>

        <tbody>

          {rooms.map((room) => (

            <tr
              key={room.id}
              className="border-b border-outline-variant last:border-0 transition hover:bg-surface-container-low"
            >

              {/* Room */}
              <td className="px-5 py-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container text-primary">
                    <FaBed />
                  </div>

                  <div>
                    <p className="font-semibold text-on-surface">
                      {room.room}
                    </p>

                    <p className="text-xs text-on-surface-variant">
                      Room
                    </p>
                  </div>

                </div>

              </td>

              {/* Location */}
              <td className="px-5 py-4">

                <p className="text-sm font-medium text-on-surface">
                  {room.block}
                </p>

                <p className="text-xs text-on-surface-variant">
                  {room.floor}
                </p>

              </td>

              {/* Capacity */}
              <td className="px-5 py-4">

                <span className="text-sm font-medium text-on-surface">
                  {room.capacity} beds
                </span>

              </td>

              {/* Occupied */}
              <td className="px-5 py-4">

                <span className="text-sm font-medium text-on-surface">
                  {room.occupied}
                </span>

              </td>

              {/* Available */}
              <td className="px-5 py-4">

                <span
                  className={`text-sm font-semibold ${
                    room.available > 0
                      ? "text-primary"
                      : "text-on-surface-variant"
                  }`}
                >
                  {room.available}
                </span>

              </td>

              {/* Status */}
              <td className="px-5 py-4">

                <RoomStatus status={room.status} />

              </td>

              {/* Actions */}
              <td className="px-5 py-4 text-right">

                <div className="flex items-center justify-end gap-1">

                 <Link
  href={`/admin/rooms/${room.room}`}
  className="rounded-lg p-2 text-on-surface-variant transition hover:bg-surface-container hover:text-primary"
  title="View room"
>
  <FaEye />
</Link>

                  <button
                    type="button"
                    className="rounded-lg p-2 text-on-surface-variant transition hover:bg-surface-container hover:text-on-surface"
                  >
                    <FaEllipsisV />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-outline-variant p-5 text-sm text-on-surface-variant">

        <span>
          Showing {rooms.length} rooms
        </span>

        <span>
          Page 1 of 1
        </span>

      </div>

    </div>
  );
}

function RoomStatus({
  status,
}: {
  status: Room["status"];
}) {
  const styles = {
    Available: "bg-primary-container text-primary",
    Full: "bg-secondary-container text-on-secondary-container",
    Maintenance: "bg-error-container text-on-error-container",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}