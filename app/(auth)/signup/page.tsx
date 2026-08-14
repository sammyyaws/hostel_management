"use client";

import React from "react";
import * as Yup from "yup";
import FormikForm from "../../components/form/FormikForm";
import FormInput from "../../components/form/FormInput";
import FormCheckbox from "../../components/form/FormCheckbox";
import { SignupValues } from "../../../types/auth";

const initialValues: SignupValues = {
	fullName: "",
	studentId: "",
	email: "",
	phone: "",
	password: "",
	confirmPassword: "",
	terms: false,
};

const validationSchema = Yup.object({
	fullName: Yup.string().required("Full name is required"),
	studentId: Yup.string().required("Student ID is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	phone: Yup.string().required("Phone number is required"),
	password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords must match")
		.required("Confirm your password"),
	terms: Yup.boolean().oneOf([true], "You must accept terms"),
});

export default function SignupPage() {
	const handleSubmit = async (values: SignupValues) => {
		console.log("signup submit", values);
		// TODO: call API to create account
	};

	return (
		<div className="min-h-full flex">
			<div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 bg-surface w-full">
				<div className="mx-auto w-full max-w-sm lg:w-96">
					<div>
						<h2 className="mt-8 font-headline-lg text-headline-lg text-primary">TYB Hostel</h2>
						<p className="mt-2 font-body-lg text-body-lg text-on-surface-variant">Create your student account.</p>
					</div>

					<div className="mt-8">
						<div className="mt-6">
							<FormikForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
								<div className="space-y-6">
									<div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
										<FormInput name="fullName" label="Full Name" />
										<FormInput name="studentId" label="Student ID" />
									</div>

									<FormInput name="email" label="Email address" type="email" />
									<FormInput name="phone" label="Phone Number" type="tel" />

									<div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
										<FormInput name="password" label="Password" type="password" />
										<FormInput name="confirmPassword" label="Confirm Password" type="password" />
									</div>

									<div>
										<FormCheckbox name="terms" label={"I agree to the Terms and Conditions and Privacy Policy."} />
									</div>

									<div>
										<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-DEFAULT shadow-sm font-label-md text-label-md text-on-primary bg-primary hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
											Create Account
										</button>
									</div>
								</div>
							</FormikForm>
						</div>

						<div className="mt-6 text-center">
							<a className="font-label-md text-label-md text-primary hover:text-primary-container transition-colors" href="#">Sign in instead</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

