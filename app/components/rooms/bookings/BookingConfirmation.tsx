
import type { Booking } from "@/features/bookings/bookingsSlice";

interface BookingConfirmationProps {
  booking: Booking;
}

export default function BookingConfirmation({
  booking,
}: BookingConfirmationProps) {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-2xl text-teal-700">
          ✓
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          Booking request created
        </h1>

        <p className="mt-2 text-gray-600">
          Your selected bed is temporarily held while you complete the
          payment process.
        </p>

        <div className="mt-6 space-y-3 rounded-xl bg-gray-50 p-4 text-sm">
          <p>
            <span className="text-gray-500">Booking reference:</span>{" "}
            <strong>{booking.id}</strong>
          </p>

          <p>
            <span className="text-gray-500">Room:</span>{" "}
            <strong>{booking.roomName}</strong>
          </p>

          <p>
            <span className="text-gray-500">Bed:</span>{" "}
            <strong>{booking.bedLabel}</strong>
          </p>

          <p>
            <span className="text-gray-500">Amount due:</span>{" "}
            <strong>GH₵ {booking.price.toLocaleString()}</strong>
          </p>

          <p>
            <span className="text-gray-500">Status:</span>{" "}
            <strong className="text-amber-700">{booking.status}</strong>
          </p>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Payment instructions and proof submission will be added next.
          This mock booking is stored in Redux only.
        </p>
      </div>
    </main>
  );
}
