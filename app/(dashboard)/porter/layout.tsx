"use client";

import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";

import DashboardSidebar from "@/components/dashboard/admin/DashboardSidebar";
import DashboardMobileHeader from "@/components/dashboard/admin/DashboardMobileHeader";
import DashboardMobileMenu from "@/components/dashboard/admin/DashboardMobileMenu";

import { porterNavigation } from "@/components/dashboard/navigation/porterNavigation";

export default function PorterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Desktop Sidebar */}
      <DashboardSidebar
        navigation={porterNavigation}
        portalName="Porter Portal"
        portalSubtitle="Hostel Operations"
        portalIcon={FaUserTie}
      />

      {/* Mobile Header */}
      <DashboardMobileHeader
        onMenuClick={() => setMobileMenuOpen(true)}
        portalName="Porter Portal"
        portalSubtitle="Hostel Operations"
      />

      {/* Mobile Menu */}
      <DashboardMobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={porterNavigation}
        portalName="Porter Portal"
        portalSubtitle="Hostel Operations"
        portalIcon={FaUserTie}
      />

      {/* Page Content */}
      <main className="min-h-screen md:ml-[260px]">
        <div className="pt-16 md:pt-0">
          {children}
        </div>
      </main>
    </div>
  );
}