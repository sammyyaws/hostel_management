import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ComplaintRecord = Record<string, unknown>;

type ComplaintsState = {
  items: ComplaintRecord[];
  loading: boolean;
  error: string | null;
};

const initialState: ComplaintsState = {
  items: [],
  loading: false,
  error: null,
};

const complaintsSlice = createSlice({
  name: 'complaints',
  initialState,
  reducers: {
    setComplaints: (state, action: PayloadAction<ComplaintRecord[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearComplaints: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setComplaints, setLoading, setError, clearComplaints } = complaintsSlice.actions;
export default complaintsSlice.reducer;
