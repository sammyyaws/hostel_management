import {
  FaUtensils,
  FaBath,
  FaTshirt,
  FaFan,
  FaWifi,
  FaDesktop,
} from "react-icons/fa";

export interface RoomAmenity {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

interface RoomAmenitiesProps {
  amenities: RoomAmenity[];
}



const amenities = [
  {
    id: "kitchen",
    name: "Kitchenette Access",
    icon: <FaUtensils />,
  },
  {
    id: "bathroom",
    name: "En-suite Washroom",
    icon: <FaBath />,
  },
  {
    id: "wardrobe",
    name: "Fitted Wardrobe",
    icon: <FaTshirt />,
  },
  {
    id: "fan",
    name: "Dual Ceiling Fan",
    icon: <FaFan />,
  },
  {
    id: "wifi",
    name: "High-Speed Wi-Fi",
    icon: <FaWifi />,
  },
  {
    id: "desk",
    name: "Dedicated Desk",
    icon: <FaDesktop />,
  },
];



export default function RoomAmenities({
  amenities,
}: RoomAmenitiesProps) {
  return (
    <div className="mt-4 border-t border-outline-variant pt-4">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
        Room Amenities
      </h4>

      <div className="grid grid-cols-2 gap-x-2 gap-y-3 sm:grid-cols-3">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className="flex items-center gap-2 text-on-surface"
          >
            <span className="text-lg text-primary">
              {amenity.icon}
            </span>

            <span className="text-xs text-on-surface">
              {amenity.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}