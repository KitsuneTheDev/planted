import { configureStore } from '@reduxjs/toolkit';
import weatherServiceReducer from './slices/weatherServiceSlice';
import plantSeviceReducer from './slices/plantServiceSlice';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        weatherServiceReducer,
        plantSeviceReducer,
    }
});

export default store;