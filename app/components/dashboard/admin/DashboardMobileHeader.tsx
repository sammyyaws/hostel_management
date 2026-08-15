"use client";

import React from "react";
import { FaBars } from "react-icons/fa";

interface DashboardMobileHeaderProps {
  onMenuClick: () => void;
  portalName: string;
  portalSubtitle: string;
}

export default function DashboardMobileHeader({
  onMenuClick,
  portalName,
  portalSubtitle,
}: DashboardMobileHeaderProps) {
  return (
    <header className="fixed left-0 top-0 z-40 flex h-16 w-full items-center justify-between bg-[#00535b] px-5 text-white shadow-sm md:hidden">
      {/* Portal Name */}
      <div>
        <h1 className="text-lg font-bold">
          {portalName}
        </h1>

        <p className="text-[11px] text-white/70">
          {portalSubtitle}
        </p>
      </div>

      {/* Hamburger */}
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/10 active:bg-white/20"
      >
        <FaBars className="text-xl" />
      </button>
    </header>
  );
}