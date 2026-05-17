import { configureStore } from '@reduxjs/toolkit';
import weatherServiceReducer from './slices/weatherServiceSlice'

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        weatherServiceReducer
    }
});

export default store;