"use client";

import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FaArrowLeft,
  FaBullhorn,
  FaSave,
  FaPaperPlane,
} from "react-icons/fa";

const announcementSchema = Yup.object({
  title: Yup.string()
    .trim()
    .required("Announcement title is required"),

  audience: Yup.string()
    .required("Please select an audience"),

  publishDate: Yup.string()
    .required("Please select a publish date"),

  content: Yup.string()
    .trim()
    .required("Announcement content is required")
    .min(10, "Content must be at least 10 characters"),
});

const initialValues = {
  title: "",
  audience: "All Residents",
  publishDate: "",
  content: "",
};

export default function CreateAnnouncement() {
  return (
    <div className="space-y-6 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Header */}
      <div>
        <Link
          href="/admin/announcements"
          className="mb-4 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600"
        >
          <FaArrowLeft />
          Back to Announcements
        </Link>

        <h1 className="text-2xl font-bold text-gray-900">
          Create Announcement
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Create and publish an announcement for hostel residents.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={announcementSchema}
        onSubmit={(values) => {
          console.log("Publish:", values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            {/* Form */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <FaBullhorn />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Announcement Information
                  </h2>

                  <p className="text-sm text-gray-500">
                    Enter the details of the announcement.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Title
                  </label>

                  <Field
                    name="title"
                    type="text"
                    placeholder="e.g. Water Supply Maintenance"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />

                  <ErrorMessage
                    name="title"
                    component="p"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>

                {/* Audience + Date */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Audience
                    </label>

                    <Field
                      as="select"
                      name="audience"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    >
                      <option value="All Residents">
                        All Residents
                      </option>
                      <option value="Block A">Block A</option>
                      <option value="Block B">Block B</option>
                      <option value="Block C">Block C</option>
                      <option value="Managers">Managers</option>
                      <option value="Porters">Porters</option>
                    </Field>

                    <ErrorMessage
                      name="audience"
                      component="p"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Publish Date
                    </label>

                    <Field
                      name="publishDate"
                      type="datetime-local"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />

                    <ErrorMessage
                      name="publishDate"
                      component="p"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Announcement Content
                  </label>

                  <Field
                    as="textarea"
                    name="content"
                    rows={8}
                    placeholder="Write your announcement here..."
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />

                  <ErrorMessage
                    name="content"
                    component="p"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col justify-end gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <FaSave />
                Save Draft
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FaPaperPlane />
                Publish Announcement
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}