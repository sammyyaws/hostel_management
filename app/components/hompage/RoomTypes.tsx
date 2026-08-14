import Link from "next/link";
import RoomCard from "../UIComponents/RoomCard";

const rooms = [
  {
    image: "/rooms/twin-share.jpg",
    title: "Single Room (1-Bed)",
    badge: "Popular",
    description:
      "A comfortable shared space offering a balance of community and privacy.",
    price: "From GHS 11,500",
    features: [
      "1 Single Bed",
      "Single Study Desk",
      "En-suite Bathroom",
      "Kitchen "
    ],
  },
 {
    image: "/rooms/twin-share.jpg",
    title: "Twin Share (2-Bed)",
    badge: "Popular",
    description:
      "A comfortable shared space offering a balance of community and privacy.",
    price: "From GHS 8,500",
    features: [
      "2 Single Beds",
      "Shared Study Desk",
      "En-suite Bathroom",
      "Kitchen "
    ],
  },
  {
    image: "/rooms/quad-share.jpg",
    title: "Triple Share (3-Bed)",
    description:
      "An economical option for students looking for an affordable and sociable living environment.",
    price: "From GHS 7,000",
    features: [
      "3 Single Beds",
      "Individual Study Nooks",
      "Large Shared Bathroom",
    ],
  },
];

export default function RoomTypes() {
  return (
    <section className="w-full bg-surface-container-low px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
              Room Types
            </h2>

            <p className="mt-2 text-sm text-on-surface-variant md:text-base">
              Find the perfect space that fits your budget and lifestyle.
            </p>
          </div>

          <Link
            href="/rooms"
            className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-container md:mt-0"
          >
            View all rooms
            <span>→</span>
          </Link>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1  gap-8 ">
          {rooms.map((room) => (
            <RoomCard
              key={room.title}
              image={room.image}
              title={room.title}
              badge={room.badge}
              description={room.description}
              price={room.price}
              features={room.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}