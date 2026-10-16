
interface BookingSummaryProps {
  roomName: string;
  price: number;
  selectedBedLabel: string | null;
  onSubmit: () => void;
}

export default function BookingSummary({
  roomName,
  price,
  selectedBedLabel,
  onSubmit,
}: BookingSummaryProps) {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-gray-900">
        Booking summary
      </h2>

      <div className="mt-5 space-y-4 text-sm">
        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Room</span>
          <span className="font-medium text-gray-900">{roomName}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Selected bed</span>
          <span className="font-medium text-gray-900">
            {selectedBedLabel ?? "None"}
          </span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Academic year fee</span>
          <span className="font-medium text-gray-900">
            GH₵ {price.toLocaleString()}
          </span>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between gap-4">
            <span className="font-semibold text-gray-900">Total due</span>
            <span className="text-lg font-bold text-teal-700">
              GH₵ {price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        disabled={!selectedBedLabel}
        onClick={onSubmit}
        className="mt-6 w-full rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Submit Booking Request
      </button>

      <p className="mt-3 text-xs leading-5 text-gray-500">
        Submitting your request temporarily holds the selected bed.
        Your booking is not confirmed until the hostel verifies your
        payment.
      </p>
    </aside>
  );
}
