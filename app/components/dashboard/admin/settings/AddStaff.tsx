"use client";

import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FaArrowLeft,
  FaUserPlus,
  FaSave,
} from "react-icons/fa";

const staffSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .required("Full name is required"),

  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),

  phone: Yup.string()
    .trim()
    .required("Phone number is required"),

  role: Yup.string()
    .required("Please select a role"),
});

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  role: "",
};

export default function AddStaff() {
  return (
    <div className="space-y-6 mx-auto max-w-7xl p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/admin/settings"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"
        >
          <FaArrowLeft size={14} />
        </Link>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Add Staff
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Create an account for a new hostel staff member.
          </p>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={staffSchema}
        onSubmit={(values) => {
          console.log("New staff:", values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            {/* Personal Information */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <FaUserPlus size={17} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Staff Information
                  </h2>

                  <p className="text-sm text-gray-500">
                    Enter the staff member's details.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <FormField
                  label="Full Name"
                  name="fullName"
                  placeholder="e.g. Kwame Asante"
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="e.g. kwame@example.com"
                />

                <FormField
                  label="Phone Number"
                  name="phone"
                  placeholder="e.g. 024 123 4567"
                />

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Role
                  </label>

                  <Field
                    as="select"
                    name="role"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  >
                    <option value="">Select role</option>
                    <option value="Manager">Manager</option>
                    <option value="Porter">Porter</option>
                    <option value="Cleaner">Cleaner</option>
                  </Field>

                  <ErrorMessage
                    name="role"
                    component="p"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Access Information */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-gray-900">
                Account Access
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                The staff member will use their email to access the
                hostel management system.
              </p>

              <div className="mt-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-700">
                A temporary password or account activation link can be
                generated when the backend is connected.
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <Link
                href="/admin/settings"
                className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700 disabled:opacity-50"
              >
                <FaSave size={14} />
                Add Staff
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
      />

      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-xs text-red-500"
      />
    </div>
  );
}