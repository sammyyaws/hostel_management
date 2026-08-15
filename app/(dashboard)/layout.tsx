"use client";

import React, { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardMobileHeader from "../components/dashboard/DashboardMobileHeader";
import DashboardMobileMenu from "../components/dashboard/DashboardMobileMenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Desktop */}
      <DashboardSidebar />

      {/* Mobile */}
      <DashboardMobileHeader
        onMenuClick={() => setMobileMenuOpen(true)}
      />

      <DashboardMobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Content */}
      <main className="min-h-screen md:ml-[260px]">
        <div className="pt-16 md:pt-0">
          {children}
        </div>
      </main>
    </div>
  );
}