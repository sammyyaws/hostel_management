
import { baseApi } from "./baseApi";

export interface RegisterRequest {
  full_name: string;
  student_id: string;
  gender: "MALE" | "FEMALE" | "";
  email: string;
  phone: string;
  password: string;
}

export interface RegisterResponse {
  id: number;
  email: string;
  role: string;
  status: string;
}

export interface LoginRequest {
  login: string;
  password: string;
}

export interface AuthUser {
  id: number;
  email: string;
  role: "ADMIN" | "PORTER" | "STUDENT" | "STAFF";
  status: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  user: AuthUser;
}

//student profile 

export interface StudentProfile {
  full_name: string;
  student_id: string;
  email: string;
  phone: string | null;
  gender: "MALE" | "FEMALE" | "OTHER" | "PREFER_NOT_TO_SAY" | null;
  program: string | null;
  year_of_study: number | null;
  emergency_contact: string | null;
  is_profile_complete: boolean;
}

export type UpdateStudentProfileRequest = Partial<
  Pick<
    StudentProfile,
    | "full_name"
    | "phone"
    | "gender"
    | "program"
    | "year_of_study"
    | "emergency_contact"
  >
>;

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: "auth/register/",
        method: "POST",
        body,
      }),
    }),

    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "auth/login/",
        method: "POST",
        body,
      }),
    }),

    getCurrentUser: builder.query<AuthUser, void>({
      query: () => "auth/me/",
    }),
  //student update profile

getStudentProfile: builder.query<StudentProfile, void>({
  query: () => "auth/profile/",
  providesTags: ["StudentProfile"],
}),

updateStudentProfile: builder.mutation< StudentProfile,UpdateStudentProfileRequest>({
  query: (body) => ({
    url: "auth/profile/",
    method: "PATCH",
    body,
  }),
  invalidatesTags: ["StudentProfile"],
}),




  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
} = authApi;
