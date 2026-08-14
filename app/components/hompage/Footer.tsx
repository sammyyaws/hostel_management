import Link from "next/link";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Rooms", path: "/rooms" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-primary border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        {/* Brand */}
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="text-lg font-bold text-neutral"
          >
            TYB Hostel
          </Link>

          <p className="mt-2 text-sm text-on-surface">
            © {new Date().getFullYear()} TYB Hostel Management.
            <br className="md:hidden" /> All rights reserved.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/privacy"
            className="text-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}