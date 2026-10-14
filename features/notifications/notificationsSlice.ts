import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type NotificationRecord = Record<string, unknown>;

type NotificationsState = {
  items: NotificationRecord[];
  loading: boolean;
  error: string | null;
};

const initialState: NotificationsState = {
  items: [],
  loading: false,
  error: null,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotifications: (state, action: PayloadAction<NotificationRecord[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearNotifications: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setNotifications, setLoading, setError, clearNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;
