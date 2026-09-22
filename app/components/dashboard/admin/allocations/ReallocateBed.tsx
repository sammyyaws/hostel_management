"use client";

import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FaArrowLeft,
  FaExchangeAlt,
  FaBed,
} from "react-icons/fa";

type ReallocateBedProps = {
  allocationId: string;
};

const reallocateSchema = Yup.object({
  block: Yup.string().required("Please select a block"),
  room: Yup.string().required("Please select a room"),
  bed: Yup.string().required("Please select an available bed"),
  effectiveDate: Yup.string().required("Please select an effective date"),
});

const initialValues = {
  block: "",
  room: "",
  bed: "",
  effectiveDate: "",
};

export default function ReallocateBed({
  allocationId,
}: ReallocateBedProps) {
  // Temporary frontend data.
  const resident = {
    name: "John Mensah",
    studentId: "KNUST-2026-001",
    currentBlock: "Block A",
    currentRoom: "A-12",
    currentBed: "A-12-03",
  };

  return (
    <div className="space-y-6  mx-auto max-w-7xl p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href={`/admin/allocations/${allocationId}`}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"
        >
          <FaArrowLeft size={14} />
        </Link>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Reallocate Bed
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Move the resident to another available bed.
          </p>
        </div>
      </div>

      {/* Current Allocation */}
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-gray-900">
          Current Allocation
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <InfoItem label="Resident" value={resident.name} />

          <InfoItem label="Student ID" value={resident.studentId} />

          <InfoItem
            label="Current Room"
            value={`${resident.currentBlock} - ${resident.currentRoom}`}
          />

          <InfoItem label="Current Bed" value={resident.currentBed} />
        </div>
      </div>

      {/* New Allocation */}
      <Formik
        initialValues={initialValues}
        validationSchema={reallocateSchema}
        onSubmit={(values) => {
          console.log("Reallocate:", {
            allocationId,
            ...values,
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <FaBed size={17} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    New Allocation
                  </h2>

                  <p className="text-sm text-gray-500">
                    Select the resident's new bed.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <FormField label="Block" name="block">
                  <option value="">Select block</option>
                  <option value="Block A">Block A</option>
                  <option value="Block B">Block B</option>
                  <option value="Block C">Block C</option>
                </FormField>

                <FormField label="Room" name="room">
                  <option value="">Select room</option>
                  <option value="A-01">A-01</option>
                  <option value="A-02">A-02</option>
                  <option value="B-01">B-01</option>
                  <option value="C-03">C-03</option>
                </FormField>

                <FormField label="Available Bed" name="bed">
                  <option value="">Select bed</option>
                  <option value="A-01-02">A-01-02</option>
                  <option value="A-02-04">A-02-04</option>
                  <option value="B-01-03">B-01-03</option>
                  <option value="C-03-01">C-03-01</option>
                </FormField>
              </div>
            </div>

            {/* Effective Date */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Effective Date
              </label>

              <Field
                type="date"
                name="effectiveDate"
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 md:w-80"
              />

              <ErrorMessage
                name="effectiveDate"
                component="p"
                className="mt-1 text-xs text-red-500"
              />
            </div>

            {/* Warning */}
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-700">
              The resident's current bed will become available after the
              reallocation is completed.
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <Link
                href={`/admin/allocations/${allocationId}`}
                className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700 disabled:opacity-50"
              >
                <FaExchangeAlt size={14} />
                Reallocate Bed
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
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <Field
        as="select"
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

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-gray-900">
        {value}
      </p>
    </div>
  );
}