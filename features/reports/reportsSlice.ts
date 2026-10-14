import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ReportRecord = Record<string, unknown>;

type ReportsState = {
  items: ReportRecord[];
  loading: boolean;
  error: string | null;
};

const initialState: ReportsState = {
  items: [],
  loading: false,
  error: null,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setReports: (state, action: PayloadAction<ReportRecord[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearReports: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setReports, setLoading, setError, clearReports } = reportsSlice.actions;
export default reportsSlice.reducer;
