"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";

const navigation = [
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

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed left-0 top-0 z-50 h-screen w-[260px] flex-col bg-[#00535b] text-white shadow-sm">
      {/* Logo / Portal Header */}
      <div className="mt-4 mb-8 flex items-center gap-4 px-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#006d77]">
          <FaUserShield className="text-2xl" />
        </div>

        <div>
          <h2 className="text-lg font-bold leading-6">
            Admin Portal
          </h2>

          <p className="text-xs text-white/70">
            System Management
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 px-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-white/10 font-bold"
                  : "text-white/80 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon
                className={`text-lg ${
                  isActive ? "text-white" : "text-white/80"
                }`}
              />

              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-auto border-t border-white/10 px-4 py-4">
        <button
          type="button"
          className="flex w-full items-center gap-4 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}