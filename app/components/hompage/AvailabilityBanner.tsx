
export default function AvailabilityBanner() {
  return (
    <section className="w-full bg-secondary px-6 py-3 text-on-secondary">
      <p className="flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-wide md:text-sm">
        {/* Info Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4 shrink-0"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>

        <span>
          Limited spots left for the 2026/27 academic year. Secure your room
          today.
        </span>
      </p>
    </section>
  );
}