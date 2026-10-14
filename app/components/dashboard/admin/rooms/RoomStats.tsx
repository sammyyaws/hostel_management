'use client'

import {
  FaBed,
  FaDoorOpen,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import {useAppSelector} from   "@/lib/hooks";


export default function RoomStats() {


const rooms = useAppSelector((state) => state.rooms.rooms);

const totalRooms = rooms.length;

const totalBeds = rooms.reduce(
  (total, room) => total + room.capacity,
  0
);

const occupiedBeds = rooms.reduce(
  (total, room) => total + room.occupied,
  0
);

const availableBeds = rooms.reduce(
  (total, room) => total + room.available,
  0
);


const stats = [
  {
    label: "Total Rooms",
    value: totalRooms,
    icon: FaDoorOpen,
  },
  {
    label: "Total Beds",
    value: totalBeds,
    icon: FaBed,
  },
  {
    label: "Occupied Beds",
    value: occupiedBeds,
    icon: FaUsers,
  },
  {
    label: "Available Beds",
    value: availableBeds,
    icon: FaCheckCircle,
  },
];






  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-gray-200 bg-surface-container-lowest p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-on-surface-variant">
                  {stat.label}
                </p>

                <p className="mt-3 text-3xl font-bold text-on-surface">
                  {stat.value}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-container text-primary">
                <Icon />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}