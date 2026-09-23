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

export const porterNavigation = [
  {
    name: "Dashboard",
    href: "/porter",
    icon: FaChartLine,
  },
  {
    name: "Residents",
    href: "/porter/residents",
    icon: FaUsers,
  },
  {
    name: "Rooms & Beds",
    href: "/porter/rooms",
    icon: FaBed,
  },
  {
    name: "Allocations",
    href: "/porter/allocations",
    icon: FaClipboardList,
  },
  {
    name: "Payments",
    href: "/porter/payments",
    icon: FaWallet,
  },
  {
    name: "Complaints",
    href: "/porter/complaints",
    icon: FaComments,
  },
  {
    name: "Announcements",
    href: "/porter/announcements",
    icon: FaBullhorn,
  },
 
];