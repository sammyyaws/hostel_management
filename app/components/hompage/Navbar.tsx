"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Rooms", path: "/rooms" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-outline-variant bg-surface transition-all duration-300 ${
        isScrolled ? "h-16 shadow-sm" : "h-16"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary"
        >
          TYB Hostel
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  active
                    ? "text-primary after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Login */}
        <Link
          href="/login"
          className="hidden rounded bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-container md:block"
        >
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`h-0.8 w-6 bg-on-surface transition-transform ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          {mobileMenuOpen ? (
            <FaAngleDoubleUp className="h-8 w-8 font-bold text-xl" />
          ) : (
            <FaBars className="h-8 w-8 font-bold text-xl" />
          )}
          <span
            className={`h-0.8 w-6 bg-on-surface transition-opacity ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-on-surface transition-transform ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute bg-white left-0 right-0 top-16 border-b border-outline-variant bg-surface shadow-md transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col bg-white px-6 py-5">
          {navItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-outline-variant py-4 text-sm font-medium ${
                  active
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-5 rounded bg-primary px-5 py-3 text-center text-sm font-semibold text-on-primary"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}