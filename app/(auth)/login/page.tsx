"use client";


import { useRouter } from "next/navigation";
import * as Yup from "yup";
import FormikForm from "../../components/form/FormikForm";
import FormInput from "../../components/form/FormInput";
import { LoginValues } from "../../../types/auth";

const initialValues: LoginValues = {
	identifier: "",
	password: "",
};

const validationSchema = Yup.object({
	identifier: Yup.string().required("Email or Student ID is required"),
	password: Yup.string().required("Password is required"),
});

export default function LoginPage() {
	const router = useRouter();

	const handleSubmit = async (values: LoginValues) => {
		// TODO: replace with real auth call
		console.log("login submit", values);
		// redirect or show success
		// router.push('/');
	};

	return (
		<div className="w-full flex flex-col relative overflow-y-auto">
			<div className="flex-1 flex items-center justify-center  p-6">
				<div className="w-full max-w-sm">
					<div className="mb-10 text-center">
						<div className="flex items-center justify-center gap-2 mb-6 text-primary">
							
							<span className="font-headline-md text-headline-lg font-bold tracking-tight">TYB Hostel</span>
						</div>
						<h1 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-on-surface mb-2">Welcome back</h1>
						<p className="font-body-md text-body-md text-on-surface-variant">Please enter your credentials to sign in.</p>
					</div>



					{/**form content */}
                   <div className="bg-surface-container-lowest shadow-md border-t-primary border-t-3 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
					<FormikForm  initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
						<div className="space-y-6">
							<div className="space-y-1.5">
								<FormInput name="identifier" label="Email or Student ID" placeholder="e.g. STU-2024-001" />
							</div>

							<div className="space-y-1.5">
								<div className="flex items-center justify-between">
									<label className="block font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
								</div>
								<FormInput name="password" label="" type="password" placeholder="••••••••" />
							</div>

							<div className="pt-2">
								<button type="submit" className="w-full py-3.5 bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-md text-label-md rounded shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 ambient-shadow">
									Sign In
									<span className="material-symbols-outlined text-[18px]">login</span>
								</button>
							</div>
						</div>
					</FormikForm>
</div>
					<div className="mt-8 pt-6 border-t border-outline-variant/30 text-center">
						<p className="font-body-md text-body-md text-on-surface-variant">Don't have an account? <a href="#" className="font-label-md text-label-md text-primary">Apply for residency</a></p>
					</div>
				</div>
			</div>
		</div>
	);
}

