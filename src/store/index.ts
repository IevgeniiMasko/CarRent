import { configureStore } from '@reduxjs/toolkit';
import testReducer from './slices/test';

export const store = configureStore({
  reducer: {
    test: testReducer,
    test2: testReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
