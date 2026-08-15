"use client";

import React, { useState } from "react";
import { FaUserShield } from "react-icons/fa";

import DashboardSidebar from "../../components/dashboard/admin/DashboardSidebar";
import DashboardMobileHeader from "../../components/dashboard/admin/DashboardMobileHeader";
import DashboardMobileMenu from "../../components/dashboard/admin/DashboardMobileMenu";

import { adminNavigation } from "../../components/dashboard/navigation/adminNavigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Desktop Sidebar */}
      <DashboardSidebar
        navigation={adminNavigation}
        portalName="Admin Portal"
        portalSubtitle="System Management"
        portalIcon={FaUserShield}
      />

      {/* Mobile Header */}
      <DashboardMobileHeader
        onMenuClick={() => setMobileMenuOpen(true)}
        portalName="Admin Portal"
        portalSubtitle="System Management"
      />

      {/* Mobile Menu */}
      <DashboardMobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={adminNavigation}
        portalName="Admin Portal"
        portalSubtitle="System Management"
        portalIcon={FaUserShield}
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