import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type PaymentRecord = Record<string, unknown>;

type PaymentsState = {
  items: PaymentRecord[];
  loading: boolean;
  error: string | null;
};

const initialState: PaymentsState = {
  items: [],
  loading: false,
  error: null,
};

const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    setPayments: (state, action: PayloadAction<PaymentRecord[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearPayments: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setPayments, setLoading, setError, clearPayments } = paymentsSlice.actions;
export default paymentsSlice.reducer;
