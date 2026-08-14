"use client";

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../components/form/FormInput";
import FormSelect from "../components/form/FormSelect";
import FormTextarea from "../components/form/FormTextarea";
import InfoCard from "../components/cards/InfoCard";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const initial = { fullName: "", email: "", subject: "General Inquiry", message: "" };

const schema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required(),
  message: Yup.string().required("Message is required"),
});

export default function ContactPage() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-container-padding py-12 flex flex-col gap-12">
      <header className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="font-headline-lg text-headline-lg text-primary md:text-headline-lg">Get in Touch</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Our administration team is here to assist you. Please fill out the form below or contact us directly.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl border border-outline-variant p-6 sm:p-8 mb-6 lg:mb-0">
          <h2 className="font-headline-md text-headline-md text-primary mb-6">Send a Message</h2>

          <Formik initialValues={initial} validationSchema={schema} onSubmit={(values) => console.log(values)}>
            {() => (
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput name="fullName" label="Full Name" placeholder="Jane Doe" />
                  <FormInput name="email" label="Email Address" placeholder="jane@student.edu" type="email" />
                </div>

                <div>
                  <FormSelect
                    name="subject"
                    label="Subject"
                    options={[
                      { label: "General Inquiry", value: "General Inquiry" },
                      { label: "Booking & Allocation", value: "Booking & Allocation" },
                      { label: "Maintenance Request", value: "Maintenance Request" },
                      { label: "Payment Issue", value: "Payment Issue" },
                    ]}
                  />
                </div>

                <FormTextarea name="message" label="Message" placeholder="How can we help you today?" />

                <div>
                  <button type="submit" className="w-full md:w-auto bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">Send Message</button>
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6 px-2 md:px-0">
          <InfoCard title="Contact Information" variant="primary">
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-on-primary/90 mt-1" />
                <div>
                  <p className="font-label-md text-label-md text-on-primary/95 mb-1">Office Address</p>
                  <p className="font-body-sm text-body-sm">123 University Road<br/>Accra, Ghana<br/>Building C, Admin Block</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhone className="text-on-primary/90 mt-1" />
                <div>
                  <p className="font-label-md text-label-md text-on-primary/95 mb-1">Phone</p>
                  <p className="font-body-sm text-body-sm">+233 (0) 30 123 4567<br/>Mon-Fri, 8am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-on-primary/90 mt-1" />
                <div>
                  <p className="font-label-md text-label-md text-on-primary/95 mb-1">Email</p>
                  <p className="font-body-sm text-body-sm">support@tybhostel.edu.gh</p>
                </div>
              </div>
            </div>
          </InfoCard>

          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden h-48 md:h-64 relative">
            <img className="object-cover w-full h-full opacity-80 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR8540dTadlbmdr1P3bw383nkpIJSMfzw1oStSS2611rAOhYgH7AJZABYr1r1Nb2l6cCEtjs_agRhhwQ8fXjD8G_Ke2zzQd8NAZTEZDH2KP40XWaV4Hmqjxd2nmKx3hO9nVh6OAbaiyhRnax43vJnOpbuGrUrVu4zyQBE8eNhIkcjqJVQN3hPJXRbSAInv-39OX4UxjS-vvSrhm0O3Np5X6qU7tNyQjkIyEmgGbN1pEkFU6HqL317gmg" alt="map" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-error text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 opacity-95">
                <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
 