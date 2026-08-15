import type { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface RoomCardProps {
  image?: string;
  title: string;
  description?: string;
  price: string;
  period?: string;
  features?: string[];
  badge?: string;
  badgeVariant?: "info" | "success" | "warning" | "danger";
  children?: ReactNode;
}

export default function RoomCard({
  image,
  title,
  description,
  price,
  period = "/ year",
  features = [],
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
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm transition-shadow duration-300 hover:shadow-md">
      {image && (
        <div className="relative h-48 w-full md:h-56 lg:h-64">
          <img className="h-full w-full object-cover" src={image} alt={title} />
          {badge && (
            <div
              className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase shadow-sm ${badgeClasses[badgeVariant]}`}
            >
              {badge}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-on-surface">{title}</h3>
        </div>

        {description && (
          <p className="mb-5 text-sm leading-6 text-on-surface-variant">{description}</p>
        )}

        {price && (
          <div className="mb-4 font-body-md text-body-md font-semibold text-primary">
            {price}
            {period && (
              <span className="ml-1 font-body-sm text-body-sm text-on-surface-variant font-normal">
                {period}
              </span>
            )}
          </div>
        )}

        {features.length > 0 && (
          <ul className="mb-6 space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-on-surface-variant"
              >
                <FaCheckCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          {children ?? (
            <>
              <button className="w-full rounded-lg border border-outline bg-transparent px-4 py-2 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container sm:flex-1">
                View Details
              </button>
              <button className="w-full rounded-lg bg-secondary-container px-4 py-2 text-sm font-medium text-on-secondary-container transition-colors hover:bg-secondary-fixed-dim sm:flex-1">
                Apply Now
              </button>
            </>
          )}
        </div>
      </div>
    </article>
  );
}