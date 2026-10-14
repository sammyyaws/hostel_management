
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_API_URL ??
      "http://127.0.0.1:8000/api/",

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