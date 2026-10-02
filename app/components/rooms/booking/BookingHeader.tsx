import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface BookingHeaderProps {
  academicYear: string;
  residenceType: string;
}

export default function BookingHeader({
  academicYear,
  residenceType,
}: BookingHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Link
        href="/rooms"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <FaArrowLeft className="text-xs" />
        Back to Rooms
      </Link>

      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex rounded-full bg-surface-container-high px-2.5 py-1 text-xs font-semibold text-on-surface-variant">
          Academic Year {academicYear}
        </span>

        <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          {residenceType}
        </span>
      </div>
    </div>
  );
}