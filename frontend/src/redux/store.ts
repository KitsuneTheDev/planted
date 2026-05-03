import { configureStore } from '@reduxjs/toolkit';
import weatherServiceReducer from './slices/weatherServiceSlice'

const store = configureStore({
    reducer: {
        weatherServiceReducer
    }
});

export default store;