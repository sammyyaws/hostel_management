import React from "react";

const stats = [
  {
    icon: "hotel",
    value: "500+",
    label: "Beds",
  },
  {
    icon: "verified_user",
    value: "24/7",
    label: "Security",
  },
  {
    icon: "wifi",
    value: "1Gbps",
    label: "High-Speed WiFi",
  },
  {
    icon: "local_cafe",
    value: "3",
    label: "Cafeterias",
  },
];

export default function StatsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-container-padding py-16 bg-primary text-on-primary">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around items-center gap-8 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-2"
          >
            <span className="material-symbols-outlined text-4xl">
              {stat.icon}
            </span>

            <span className="font-headline-md text-headline-md">
              {stat.value}
            </span>

            <span className="font-label-md text-label-md uppercase tracking-wider text-on-primary/80">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}