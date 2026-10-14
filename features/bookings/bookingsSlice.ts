import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type BookingRecord = Record<string, unknown>;

type BookingsState = {
  items: BookingRecord[];
  loading: boolean;
  error: string | null;
};

const initialState: BookingsState = {
  items: [],
  loading: false,
  error: null,
};

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setBookings: (state, action: PayloadAction<BookingRecord[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearBookings: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setBookings, setLoading, setError, clearBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;
