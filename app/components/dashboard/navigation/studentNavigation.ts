import {
  FaChartLine,
  FaBed,
  FaWallet,
  FaComments,
  FaBullhorn,
  FaUser,
} from "react-icons/fa";

export const studentNavigation = [
  {
    name: "Dashboard",
    href: "/students",
    icon: FaChartLine,
  },
  {
    name: "My Accommodation",
    href: "/students/accommodation",
    icon: FaBed,
  },
  {
    name: "My Payments",
    href: "/students/payments",
    icon: FaWallet,
  },
  {
    name: "Complaints",
    href: "/students/complaints",
    icon: FaComments,
  },
  {
    name: "Announcements",
    href: "/students/announcements",
    icon: FaBullhorn,
  },
  {
    name: "Profile",
    href: "/students/profile",
    icon: FaUser,
  },
];