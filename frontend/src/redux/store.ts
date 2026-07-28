import { configureStore } from '@reduxjs/toolkit';
import weatherServiceReducer from './slices/weatherServiceSlice';
import { plantApi } from './reduxApis/plantApi';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        weatherServiceReducer,
        [plantApi.reducerPath]: plantApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(plantApi.middleware),
});

export default store;