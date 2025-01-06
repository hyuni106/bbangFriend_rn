import { configureStore } from '@reduxjs/toolkit';
import unitReducer from './unitSlice';
import tagReducer from './tagSlice';

const store = configureStore({
  reducer: {
    units: unitReducer,
    tags: tagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
