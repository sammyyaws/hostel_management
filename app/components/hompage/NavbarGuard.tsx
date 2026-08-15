"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarGuard() {
  const pathname = usePathname() || "";

  // Hide navbar for auth routes
  if (pathname.startsWith("/login") || pathname.startsWith("/signup") ||
   pathname.startsWith("/auth") || pathname.startsWith("/admin")  || pathname.startsWith("/students_portal") || pathname.startsWith("/manager")) {
    return null;
  }

  return <Navbar />;
}
