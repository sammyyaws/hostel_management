"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTimes,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";
import { dashboardNavigation } from "./DashboardNavigation";

interface DashboardMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DashboardMobileMenu({
  isOpen,
  onClose,
}: DashboardMobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40 md:hidden"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className="fixed left-0 top-0 z-[60] flex h-screen w-[280px] flex-col bg-[#00535b] text-white shadow-xl md:hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#006d77]">
              <FaUserShield className="text-xl" />
            </div>

            <div>
              <h2 className="text-base font-bold">
                Admin Portal
              </h2>

              <p className="text-[11px] text-white/70">
                System Management
              </p>
            </div>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-3">
          {dashboardNavigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-4 rounded-lg px-4 py-3 text-sm transition-colors ${
                  isActive
                    ? "bg-white/10 font-bold"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="text-lg" />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-white/10 px-4 py-4">
          <button
            type="button"
            className="flex w-full items-center gap-4 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
          >
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}