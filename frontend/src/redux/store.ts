import { configureStore } from '@reduxjs/toolkit';
import weatherServiceReducer from './slices/weatherServiceSlice';
import { plantApi } from './reduxApis/plantApi';
import { climatologyApi } from './reduxApis/climatologyApi';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        weatherServiceReducer,
        [plantApi.reducerPath]: plantApi.reducer,
        [climatologyApi.reducerPath]: climatologyApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(plantApi.middleware, climatologyApi.middleware)
});

export default store;