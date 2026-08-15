import React from "react";

export default function AboutCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-container-padding py-24 bg-surface-container-high text-center">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
        Ready to join our community?
      </h2>

      <a
        href="#"
        className="inline-block bg-secondary-container text-on-secondary-container font-label-md text-label-md px-8 py-4 rounded-full shadow-[0_4px_12px_rgba(0,83,91,0.15)] hover:bg-secondary hover:text-on-secondary transition-all"
      >
        View our available rooms
      </a>
    </section>
  );
}