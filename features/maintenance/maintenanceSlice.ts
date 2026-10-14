import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type MaintenanceRecord = Record<string, unknown>;

type MaintenanceState = {
  items: MaintenanceRecord[];
  loading: boolean;
  error: string | null;
};

const initialState: MaintenanceState = {
  items: [],
  loading: false,
  error: null,
};

const maintenanceSlice = createSlice({
  name: 'maintenance',
  initialState,
  reducers: {
    setMaintenance: (state, action: PayloadAction<MaintenanceRecord[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearMaintenance: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setMaintenance, setLoading, setError, clearMaintenance } = maintenanceSlice.actions;
export default maintenanceSlice.reducer;
