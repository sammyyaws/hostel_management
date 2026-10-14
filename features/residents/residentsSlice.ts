import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ResidentRecord = Record<string, unknown>;

type ResidentsState = {
  items: ResidentRecord[];
  loading: boolean;
  error: string | null;
};

const initialState: ResidentsState = {
  items: [],
  loading: false,
  error: null,
};

const residentsSlice = createSlice({
  name: 'residents',
  initialState,
  reducers: {
    setResidents: (state, action: PayloadAction<ResidentRecord[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearResidents: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setResidents, setLoading, setError, clearResidents } = residentsSlice.actions;
export default residentsSlice.reducer;
