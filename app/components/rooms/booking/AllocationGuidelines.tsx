import { FaInfoCircle } from "react-icons/fa";

interface AllocationGuidelinesProps {
  title?: string;
  message: string;
}

export default function AllocationGuidelines({
  title = "Hostel Allocation Guidelines",
  message,
}: AllocationGuidelinesProps) {
  return (
    <section className="rounded-xl border border-outline-variant bg-surface-container-low p-5">
      <div className="flex items-start gap-4">
        <FaInfoCircle className="mt-0.5 shrink-0 text-xl text-primary" />

        <div>
          <h3 className="text-base font-semibold text-on-surface">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-on-surface-variant">
            {message}
          </p>
        </div>
      </div>
    </section>
  );
}