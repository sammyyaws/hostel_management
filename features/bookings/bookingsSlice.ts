
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type BookingStatus =
  | "Pending Payment"
  | "Payment Proof Submitted"
  | "Confirmed"
  | "Rejected"
  | "Expired";

export type Booking = {
  id: string;
  roomId: number;
  roomName: string;
  bedId: string;
  bedLabel: string;
  price: number;
  status: BookingStatus;
  paymentProof: string | null;
  createdAt: string;
};

type BookingsState = {
  bookings: Booking[];
};

const initialState: BookingsState = {
  bookings: [],
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    createBooking(state, action: PayloadAction<Booking>) {
      const newBooking = action.payload;

      // A bed cannot have two active reservations.
      const bedAlreadyReserved = state.bookings.some(
        (booking) =>
          booking.roomId === newBooking.roomId &&
          booking.bedId === newBooking.bedId &&
          ["Pending Payment", "Payment Proof Submitted", "Confirmed"].includes(
            booking.status
          )
      );

      if (!bedAlreadyReserved) {
        state.bookings.push(newBooking);
      }
    },

    submitPaymentProof(
      state,
      action: PayloadAction<{
        bookingId: string;
        paymentProof: string;
      }>
    ) {
      const booking = state.bookings.find(
        (item) => item.id === action.payload.bookingId
      );

      if (booking && booking.status === "Pending Payment") {
        booking.paymentProof = action.payload.paymentProof;
        booking.status = "Payment Proof Submitted";
      }
    },

    confirmBooking(state, action: PayloadAction<string>) {
      const booking = state.bookings.find(
        (item) => item.id === action.payload
      );

      if (booking && booking.status === "Payment Proof Submitted") {
        booking.status = "Confirmed";
      }
    },

    rejectBooking(state, action: PayloadAction<string>) {
      const booking = state.bookings.find(
        (item) => item.id === action.payload
      );

      if (
        booking &&
        ["Pending Payment", "Payment Proof Submitted"].includes(
          booking.status
        )
      ) {
        booking.status = "Rejected";
      }
    },

    expireBooking(state, action: PayloadAction<string>) {
      const booking = state.bookings.find(
        (item) => item.id === action.payload
      );

      if (
        booking &&
        ["Pending Payment", "Payment Proof Submitted"].includes(
          booking.status
        )
      ) {
        booking.status = "Expired";
      }
    },
  },
});

export const {
  createBooking,
  submitPaymentProof,
  confirmBooking,
  rejectBooking,
  expireBooking,
} = bookingsSlice.actions;

export default bookingsSlice.reducer;
