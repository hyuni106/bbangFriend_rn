import { configureStore } from '@reduxjs/toolkit';
import unitReducer from './unitSlice';

const store = configureStore({
  reducer: {
    units: unitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
