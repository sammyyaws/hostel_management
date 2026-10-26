
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

import FormikForm from "@/app/components/form/FormikForm";
import FormInput from "@/app/components/form/FormInput";
import FormSelect from "@/app/components/form/FormSelect";

type BookingEmailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  roomId: number;
  bedId: string;
};

type BookingEligibilityValues = {
  email: string;
  gender: "MALE" | "FEMALE" | "";
};

type EligibilityResponse = {
  exists: boolean;
  eligible: boolean;
  message?: string;
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address.")
    .required("Email is required."),
  gender: Yup.string()
    .oneOf(["MALE", "FEMALE"], "Select your gender.")
    .required("Please select your gender."),
});

export default function BookingEmailModal({
  isOpen,
  onClose,
  roomId,
  bedId,
}: BookingEmailModalProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  if (!isOpen) return null;

  const initialValues: BookingEligibilityValues = {
    email: "",
    gender: "",
  };

  const handleSubmit = async (values: BookingEligibilityValues) => {
    setError("");
    setIsChecking(true);

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL;

      if (!apiBase) {
        throw new Error("The API URL is not configured.");
      }

      const response = await fetch(
        `${apiBase.replace(/\/+$/, "")}/bookings/check-eligibility/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email.trim().toLowerCase(),
            gender: values.gender,
            room_id: roomId,
            bed_id: bedId,
          }),
        }
      );

      const data = (await response.json()) as EligibilityResponse;

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to check this room. Please try again."
        );
      }

      if (!data.eligible) {
        setError(
          data.message ||
            "This room or bed is not available for your selection."
        );
        return;
      }

      const params = new URLSearchParams({
        email: values.email.trim().toLowerCase(),
        gender: values.gender,
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
              Continue with your booking
            </h2>
            <p className="mt-2 text-sm text-on-surface-variant">
              Enter your email and gender so we can check whether this room is
              suitable before you continue.
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

        <FormikForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <FormInput
              name="email"
              label="Email address"
              type="email"
            />

            <FormSelect
              name="gender"
              label="Gender"
              placeholder="Select your gender"
              options={[
                { value: "MALE", label: "Male" },
                { value: "FEMALE", label: "Female" },
              ]}
              disabled={isChecking}
            />

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
              {isChecking ? "Checking room..." : "Continue"}
            </button>
          </div>
        </FormikForm>

        <p className="mt-4 text-center text-xs text-on-surface-variant">
          New to TYB? We'll guide you through creating an account.
        </p>
      </div>
    </div>
  );
}
