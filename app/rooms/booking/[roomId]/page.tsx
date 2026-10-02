import { FaUtensils, FaBath, FaTshirt, FaFan, FaWifi, FaDesktop } from "react-icons/fa";

import BookingPage from "@/components/rooms/booking/BookingPage";

const room = {
  roomNumber: "A102",
  roomType: "3-in-1 Room",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDCHgR3JDeH1b8xi04GsVYkhLErh8pIH7MZAxaOY5jVcPDoNZP5JPcWJyiwrJWO0OrOY2RcU-PszcV9vUNsBAMJWPfp3pWdvCXCbnpk9GVWHdZmSW_OERPVdGwbo5DZFjbD9Nbo-Gx_1PI_mGIAjxxQxbguYoYqCPWAXHDReC-gvFgmks2utMzL9fVgYvuj8hVZpPTYWlZkBCABpCjcnIHPxOzyPqJPplMNU5qrdligVnqpD1HZXpWHQg",
  location:
    "Block A • 1st Floor • East Wing • Male Resident Wing",
  price: "GH₵ 3,500",
  period: "/ academic year",
  capacity: 3,
  academicYear: "2026/2027",
  residenceType: "Male Residence",
  availableBeds: 2,
  inspectionMessage: "Inspected & Sanitized",
};

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

const beds = [
  {
    id: "A102-B1",
    name: "BED 1",
    position: "Window View Berth",
    side: "East Window",
    price: "GH₵ 3,500",
    status: "available" as const,
  },
  {
    id: "A102-B2",
    name: "BED 2",
    position: "Study Corner Berth",
    side: "Near Study Desk",
    price: "GH₵ 3,500",
    status: "available" as const,
  },
  {
    id: "A102-B3",
    name: "BED 3",
    position: "Doorway Berth",
    side: "Entrance Adjacent",
    price: "GH₵ 3,500",
    status: "reserved" as const,
  },
];

export default function BookingRoute() {
  return (
    <BookingPage
      room={room}
      amenities={amenities}
      beds={beds}
    />
  );
}