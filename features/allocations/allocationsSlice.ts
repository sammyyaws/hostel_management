import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type AllocationRecord = Record<string, unknown>;

type AllocationsState = {
  items: AllocationRecord[];
  loading: boolean;
  error: string | null;
};

const initialState: AllocationsState = {
  items: [],
  loading: false,
  error: null,
};

const allocationsSlice = createSlice({
  name: 'allocations',
  initialState,
  reducers: {
    setAllocations: (state, action: PayloadAction<AllocationRecord[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearAllocations: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setAllocations, setLoading, setError, clearAllocations } = allocationsSlice.actions;
export default allocationsSlice.reducer;
