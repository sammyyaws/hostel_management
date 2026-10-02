import RoomAmenities, {
  RoomAmenity,
} from "./RoomAmenities";

interface RoomDetailsCardProps {
  image: string;
  roomType: string;
  roomNumber: string;
  location: string;
  price: string;
  period: string;
  amenities: RoomAmenity[];
  inspectionMessage?: string;
  availableBeds: number;
}

export default function RoomDetailsCard({
  image,
  roomType,
  roomNumber,
  location,
  price,
  period,
  amenities,
  inspectionMessage,
  availableBeds,
}: RoomDetailsCardProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Image */}
        <div className="relative h-64 min-h-[220px] md:col-span-5 md:h-auto">
          <img
            src={image}
            alt={roomNumber}
            className="h-full w-full object-cover"
          />

          <div className="absolute left-3 top-3">
            <span className="rounded-full bg-secondary-container px-3 py-1 text-xs font-bold text-on-secondary-container shadow-sm">
              {roomType}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between p-6 md:col-span-7">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-on-surface">
                  Room {roomNumber}
                </h1>

                <p className="mt-1 text-sm text-on-surface-variant">
                  {location}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <span className="text-2xl font-bold text-primary">
                  {price}
                </span>

                <span className="block text-xs text-on-surface-variant">
                  {period}
                </span>
              </div>
            </div>

            <RoomAmenities amenities={amenities} />
          </div>

          {/* Inspection / availability */}
          <div className="mt-6 flex items-center justify-between gap-3 rounded-lg border border-outline-variant bg-surface-container-low p-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-primary">✓</span>

              <span className="text-xs text-on-surface-variant">
                {inspectionMessage}
              </span>
            </div>

            <span className="shrink-0 text-xs font-semibold text-primary">
              {availableBeds} {availableBeds === 1 ? "Bed" : "Beds"} Free
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}