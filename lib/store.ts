
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../services/baseApi";
import roomsReducer from "../features/rooms/roomsSlice";
import bookingsReducer from "@/features/bookings/bookingsSlice";
export const makeStore = () =>
  configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      rooms:roomsReducer,
      bookings:bookingsReducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];