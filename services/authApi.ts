
import { baseApi } from "./baseApi";

export interface RegisterRequest {
  full_name: string;
  student_id: string;
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
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
} = authApi;
