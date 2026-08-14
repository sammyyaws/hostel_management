import React from "react";
import {
  FaWifi,
  FaShieldAlt,
  FaBookOpen,
  FaTshirt,
} from "react-icons/fa";

import FacilityCard from "../UIComponents/FacilityCard";

const facilities = [
  {
    icon: FaWifi,
    title: "High-Speed WiFi",
    description:
      "Reliable, campus-wide internet for seamless studying, research, and entertainment.",
  },
  {
    icon: FaShieldAlt,
    title: "24/7 Security",
    description:
      "Round-the-clock security and controlled access to keep residents safe and comfortable.",
  },
  {
    icon: FaBookOpen,
    title: "Quiet Study Rooms",
    description:
      "Dedicated spaces designed for focused studying, assignments, and academic work.",
  },
  {
    icon: FaTshirt,
    title: "On-site Laundry",
    description:
      "Convenient laundry facilities available within the hostel for your everyday needs.",
  },
];

export default function Facilities() {
  return (
    <section className="w-full bg-[#f8f9fa] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
            Modern Facilities
          </h2>

          <p className="mt-2 text-sm text-on-surface-variant md:text-base">
            Designed to enhance your student experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <FacilityCard
              key={facility.title}
              icon={facility.icon}
              title={facility.title}
              description={facility.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}