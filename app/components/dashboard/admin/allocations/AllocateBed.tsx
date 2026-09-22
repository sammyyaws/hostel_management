"use client";

import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FaArrowLeft,
  FaBed,
  FaSave,
  FaUser,
} from "react-icons/fa";

const allocationSchema = Yup.object({
  resident: Yup.string().required("Please select a resident"),
  block: Yup.string().required("Please select a block"),
  room: Yup.string().required("Please select a room"),
  bed: Yup.string().required("Please select an available bed"),
  startDate: Yup.string().required("Please select a start date"),
});

const initialValues = {
  resident: "",
  block: "",
  room: "",
  bed: "",
  startDate: "",
};

export default function AllocateBed() {
  return (
    <div className="space-y-6 mx-auto  max-w-7xl p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/admin/allocations"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"
        >
          <FaArrowLeft size={14} />
        </Link>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Allocate Bed
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Assign a resident to an available bed.
          </p>
        </div>
      </div>

      {/* Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={allocationSchema}
        onSubmit={(values) => {
          console.log("Allocate:", values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            {/* Resident */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <FaUser size={17} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Resident
                  </h2>

                  <p className="text-sm text-gray-500">
                    Select the resident to allocate.
                  </p>
                </div>
              </div>

              <Field
                as="select"
                name="resident"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              >
                <option value="">Select resident</option>
                <option value="John Mensah">John Mensah</option>
                <option value="Samuel Yawson">Samuel Yawson</option>
                <option value="Kofi Mensah">Kofi Mensah</option>
                <option value="Daniel Owusu">Daniel Owusu</option>
              </Field>

              <ErrorMessage
                name="resident"
                component="p"
                className="mt-1 text-xs text-red-500"
              />
            </div>

            {/* Room & Bed */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <FaBed size={17} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Room & Bed
                  </h2>

                  <p className="text-sm text-gray-500">
                    Select an available accommodation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <FormField
                  label="Block"
                  name="block"
                  as="select"
                >
                  <option value="">Select block</option>
                  <option value="Block A">Block A</option>
                  <option value="Block B">Block B</option>
                  <option value="Block C">Block C</option>
                </FormField>

                <FormField
                  label="Room"
                  name="room"
                  as="select"
                >
                  <option value="">Select room</option>
                  <option value="A-01">A-01</option>
                  <option value="A-02">A-02</option>
                  <option value="A-03">A-03</option>
                  <option value="B-01">B-01</option>
                </FormField>

                <FormField
                  label="Available Bed"
                  name="bed"
                  as="select"
                >
                  <option value="">Select bed</option>
                  <option value="A-01-01">A-01-01</option>
                  <option value="A-01-03">A-01-03</option>
                  <option value="A-02-02">A-02-02</option>
                </FormField>
              </div>
            </div>

            {/* Start Date */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Allocation Start Date
              </label>

              <Field
                type="date"
                name="startDate"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 md:w-80"
              />

              <ErrorMessage
                name="startDate"
                component="p"
                className="mt-1 text-xs text-red-500"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <Link
                href="/admin/allocations"
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
                Allocate Bed
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
  children,
  as = "input",
}: {
  label: string;
  name: string;
  children?: React.ReactNode;
  as?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <Field
        as={as}
        name={name}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
      >
        {children}
      </Field>

      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-xs text-red-500"
      />
    </div>
  );
}