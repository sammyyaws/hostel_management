import React from "react";
import type { IconType } from "react-icons";

interface FacilityCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function FacilityCard({
  icon: Icon,
  title,
  description,
}: FacilityCardProps) {
  return (
    <div className="group flex flex-col items-center rounded border border-outline-variant bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-on-surface">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}