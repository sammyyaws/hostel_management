
"use client";
import { useRouter } from "next/navigation";
import {useState} from "react";
import {useRegisterMutation} from "@/services/authApi";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import * as Yup from "yup";

import FormikForm from "../../components/form/FormikForm";
import FormInput from "../../components/form/FormInput";
import FormCheckbox from "../../components/form/FormCheckbox";
import { SignupValues } from "../../../types/auth";

function SignupForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  const initialValues: SignupValues = {
    fullName: "",
    studentId: "",
    email,
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };
/// validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),

    studentId: Yup.string().required("Student ID is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    phone: Yup.string().required("Phone number is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),

    terms: Yup.boolean().oneOf(
      [true],
      "You must accept the Terms and Conditions"
    ),
  });

//api request start
const [register,{isLoading}] = useRegisterMutation();
const[apierror,setApiError] = useState<string | null>(null);
const router = useRouter();

 const handleSubmit = async (values: SignupValues) => {
  setApiError("");

  try {
    await register({
      full_name: values.fullName,
      student_id: values.studentId,
      email: values.email,
      phone: values.phone,
      password: values.password,
    }).unwrap();
  console.log(values);
    router.push("/login?registered=true");
  } catch (error: unknown) {
    const apiError = error as {
      data?: Record<string, unknown>;
      status?: number | string;
    };

    const data = apiError.data;

    if (data && typeof data === "object") {
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
        messages.join(" ") || "Registration failed. Please try again."
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

                  <FormInput
                    name="email"
                    label="Email address"
                    type="email"
                  />

                  <FormInput
                    name="phone"
                    label="Phone Number"
                    type="tel"
                  />

                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <FormInput
                      name="password"
                      label="Password"
                      type="password"
                    />

                    <FormInput
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                    />
                  </div>

                  <div>
                    <FormCheckbox
                      name="terms"
                      label="I agree to the Terms and Conditions and Privacy Policy."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-DEFAULT shadow-sm font-label-md text-label-md text-on-primary bg-primary hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                    >
                      Create Account
                    </button>
                  </div>
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
