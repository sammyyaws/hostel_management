
"use client";

import React, { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";

import { useRegisterMutation } from "@/services/authApi";
import FormSelect from "@/app/components/form/FormSelect";
import FormikForm from "@/app/components/form/FormikForm";
import FormInput from "../../components/form/FormInput";
import FormCheckbox from "../../components/form/FormCheckbox";
import type { SignupValues } from "../../../types/auth";

function SignupForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email") ?? "";

  const [register, { isLoading }] = useRegisterMutation();
  const [apierror, setApiError] = useState<string | null>(null);

  const initialValues: SignupValues = {
    fullName: "",
    studentId: "",
    gender: "",
    email,
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .trim()
      .required("Full name is required"),

    studentId: Yup.string()
      .trim()
      .required("Student ID is required"),

    gender: Yup.string()
      .oneOf(["MALE", "FEMALE"], "Select a valid gender")
      .required("Gender is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    phone: Yup.string()
      .required("Phone number is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),

    terms: Yup.boolean()
      .oneOf([true], "You must accept the Terms and Conditions"),
  });

  const handleSubmit = async (values: SignupValues) => {
    setApiError(null);

    if (values.gender !== "MALE" && values.gender !== "FEMALE") {
      setApiError("Please select your gender.");
      return;
    }

    try {
      await register({
        full_name: values.fullName,
        student_id: values.studentId,
        gender: values.gender,
        email: values.email,
        phone: values.phone,
        password: values.password,
      }).unwrap();

      router.push("/login?registered=true");
    } catch (error: unknown) {
      const apiError = error as {
        data?: Record<string, unknown> | string;
        status?: number | string;
      };

      const data = apiError.data;

      if (typeof data === "string") {
        setApiError(data);
      } else if (data && typeof data === "object") {
        const messages = Object.entries(data)
          .map(([field, message]) => {
            const detail = Array.isArray(message)
              ? message.join(" ")
              : typeof message === "string"
                ? message
                : "";

            return detail ? `${field}: ${detail}` : "";
          })
          .filter(Boolean);

        setApiError(
          messages.join(" ") ||
            "Registration failed. Please check your details and try again."
        );
      } else {
        setApiError(
          "Could not connect to the server. Check that Django is running."
        );
      }
    }
  };

  return (
    <div className="min-h-full flex">
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 bg-surface w-full">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="items-center text-center justify-center">
            <span className="font-headline-md text-headline-lg text-primary font-bold tracking-tight">
              TYB Hostel
            </span>

            <p className="mt-2 font-body-lg text-body-lg text-on-surface-variant">
              Create your student account.
            </p>
          </div>

          <div className="mt-8 bg-surface-container-lowest shadow-md border-t-primary border-t-3 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mt-6">
              <FormikForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <FormInput
                      name="fullName"
                      label="Full Name"
                    />

                    <FormInput
                      name="studentId"
                      label="Student ID"
                    />
                  </div>

                  <FormSelect
                    name="gender"
                    label="Gender"
                    placeholder="Select your gender"
                    options={[
                      { value: "MALE", label: "Male" },
                      { value: "FEMALE", label: "Female" },
                    ]}
                    disabled={isLoading}
                  />

                  <FormInput
                    name="email"
                    label="Email address"
                    type="email"
                    disabled={isLoading}
                  />

                  <FormInput
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    disabled={isLoading}
                  />

                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <FormInput
                      name="password"
                      label="Password"
                      type="password"
                      disabled={isLoading}
                    />

                    <FormInput
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      disabled={isLoading}
                    />
                  </div>

                  <FormCheckbox
                    name="terms"
                    label="I agree to the Terms and Conditions and Privacy Policy."
                  />

                  {apierror && (
                    <p
                      role="alert"
                      className="text-sm text-red-600"
                    >
                      {apierror}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-DEFAULT shadow-sm font-label-md text-label-md text-on-primary bg-primary hover:bg-tertiary disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </button>
                </div>
              </FormikForm>
            </div>

            <div className="mt-6 text-center">
              <a
                className="font-label-md text-label-md text-primary hover:text-primary-container transition-colors"
                href="/login"
              >
                Sign in instead
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div>Loading signup form...</div>}>
      <SignupForm />
    </Suspense>
  );
}
