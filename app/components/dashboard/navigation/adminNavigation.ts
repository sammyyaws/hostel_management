import {
  FaChartLine,
  FaUsers,
  FaBed,
  FaClipboardList,
  FaWallet,
  FaComments,
  FaBullhorn,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

export const adminNavigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: FaChartLine,
  },
  {
    name: "Residents",
    href: "/admin/residents",
    icon: FaUsers,
  },
  {
    name: "Rooms & Beds",
    href: "/admin/rooms",
    icon: FaBed,
  },
  {
    name: "Allocations",
    href: "/admin/allocations",
    icon: FaClipboardList,
  },
  {
    name: "Payments",
    href: "/admin/payments",
    icon: FaWallet,
  },
  {
    name: "Complaints",
    href: "/admin/complaints",
    icon: FaComments,
  },
  {
    name: "Announcements",
    href: "/admin/announcements",
    icon: FaBullhorn,
  },
  {
    name: "Reports",
    href: "/admin/reports",
    icon: FaChartBar,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: FaCog,
  },
];