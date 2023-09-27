import { configureStore } from '@reduxjs/toolkit'
import navReducer from './NavSlice'

const store = configureStore({
  reducer: {
    flag: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;