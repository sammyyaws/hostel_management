
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL =process.env.NEXT_PUBLIC_API_URL;

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,

    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),

  tagTypes: [
    "Room",
    "Bed",
    "Booking",
    "Payment",
    "Resident",
    "Complaint",
    "Maintenance",
    "Notification",
    "Allocation",
    "Report",
  ],

  endpoints: () => ({}),
});