import { combineSlices, configureStore, createSlice } from "@reduxjs/toolkit";

export const rootReducer =
  combineSlices().withLazyLoadedSlices<LazyLoadedSlices>();

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppActions = {};
export type AppStore = typeof store;

declare global {
  interface LazyLoadedSlices {}
}
