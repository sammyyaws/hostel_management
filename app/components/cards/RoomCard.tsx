import React from "react";

interface RoomCardProps {
  title: string;
  price: string;
  period?: string;
  features?: string[];
  image?: string;
  badge?: string;
  badgeVariant?: "info" | "success" | "warning" | "danger";
  children?: React.ReactNode;
}

export default function RoomCard({
  title,
  price,
  period = "/ year",
  features = [],
  image,
  badge,
  badgeVariant = "info",
  children,
}: RoomCardProps) {
  const badgeClasses: Record<string, string> = {
    info: "bg-surface-variant text-on-surface-variant",
    success: "bg-tertiary-container text-on-tertiary-container",
    warning: "bg-secondary-container text-on-secondary-container",
    danger: "bg-error-container text-on-error-container",
  };

  return (
    <article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
      {image && (
        <div className="h-48 md:h-64 lg:h-80 w-full relative">
          <img className="object-cover w-full h-full" src={image} alt={title} />
          {badge && (
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full font-label-md text-label-md flex items-center gap-1 shadow-sm ${badgeClasses[badgeVariant]}`}>
              {badge}
            </div>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{title}</h3>
        <div className="font-body-md text-body-md text-primary font-semibold mb-4">{price} <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">{period}</span></div>

        <ul className="space-y-2 mb-6 font-body-sm text-body-sm text-on-surface-variant flex-grow">
          {features.map((f) => (
            <li className="flex items-center gap-2" key={f}>
              <span className="material-symbols-outlined text-[16px] text-primary">check</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          {children ?? (
            <>
              <button className="sm:flex-1 w-full border border-outline text-on-surface hover:bg-surface-container-low px-4 py-2 rounded-lg font-label-md text-label-md transition-colors">View Details</button>
              <button className="sm:flex-1 w-full bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed-dim px-4 py-2 rounded-lg font-label-md text-label-md transition-colors shadow-sm">Apply Now</button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
