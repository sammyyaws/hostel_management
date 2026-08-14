import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/Hero.jpg"
          alt="TYB Hostel"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-16 text-center">
        <span className="rounded-full bg-tertiary-container/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-on-tertiary-container backdrop-blur-sm">
          Premium Student Living
        </span>

        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Your Academic Journey Starts Here at TYB Hostel
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
          Experience modern, secure, and community-focused student
          accommodation designed to support your studies and lifestyle.
        </p>

        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/apply"
            className="rounded bg-secondary-container px-8 py-3 text-center text-sm font-bold uppercase tracking-wide text-on-secondary-container shadow-md transition-colors hover:bg-secondary-fixed"
          >
            Apply / Book Now
          </Link>

          <Link
            href="/rooms"
            className="rounded border border-white/40 bg-white/10 px-8 py-3 text-center text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            View Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}