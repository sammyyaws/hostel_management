export interface LoginValues {
  identifier: string;
  password: string;
}

export interface SignupValues {
  fullName: string;
  studentId: string;
  gender: "MALE" | "FEMALE" | "";
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}
