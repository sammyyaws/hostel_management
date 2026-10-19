
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type BookingEmailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  roomId: number;
  bedId: string;
};

export default function BookingEmailModal({
  isOpen,
  onClose,
  roomId,
  bedId,
}: BookingEmailModalProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setError("Please enter your email address.");
      return;
    }

    setError("");
    setIsChecking(true);

    try {
      // TODO: Replace this request with the Django API endpoint
      // that checks the email against registered accounts.
      const response = await fetch("/api/auth/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      if (!response.ok) {
        throw new Error("Unable to check this email. Please try again.");
      }

      const data: { exists: boolean } = await response.json();

      // Preserve the selected room and bed while the student
      // registers or logs in.
      const params = new URLSearchParams({
        email: normalizedEmail,
        roomId: String(roomId),
        bedId,
      });

      if (data.exists) {
        router.push(`/login?${params.toString()}`);
      } else {
        router.push(`/signup?${params.toString()}`);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-email-title"
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2
              id="booking-email-title"
              className="text-xl font-semibold text-primary"
            >
              Continue with your email
            </h2>

            <p className="mt-2 text-sm text-on-surface-variant">
              Enter your email to continue with your room booking.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-md px-2 py-1 text-xl text-on-surface-variant hover:bg-surface-container"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="booking-email"
              className="mb-2 block text-sm font-medium text-on-surface"
            >
              Email address
            </label>

            <input
              id="booking-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-outline bg-surface px-4 py-3 text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isChecking}
            className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-on-primary transition-colors hover:bg-tertiary disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isChecking ? "Checking email..." : "Continue"}
          </button>

          <p className="text-center text-xs text-on-surface-variant">
            New to TYB? We'll guide you through creating an account.
          </p>
        </form>
      </div>
    </div>
  );
}
