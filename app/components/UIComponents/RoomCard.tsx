import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";

interface RoomCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  badge?: string;
  features: string[];
}

export default function RoomCard({
  image,
  title,
  description,
  price,
  badge,
  features,
}: RoomCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded border border-outline-variant bg-white shadow-sm transition-shadow duration-300 hover:shadow-md md:flex-row">
      {/* Image */}
      <div className="relative h-56 w-full md:h-auto md:w-2/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-2 flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold text-on-surface">
              {title}
            </h3>

            {badge && (
              <span className="shrink-0 rounded bg-surface-variant px-2 py-1 text-[10px] font-bold uppercase text-on-surface">
                {badge}
              </span>
            )}
          </div>

          <p className="mb-5 text-sm leading-6 text-on-surface-variant">
            {description}
          </p>

          {/* Features */}
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
        </div>

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between border-t border-outline-variant pt-4">
          <span className="text-lg font-semibold text-primary">
            {price}
          </span>

          <Link
            href="/rooms"
            className="rounded bg-surface-container px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-surface-variant"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}