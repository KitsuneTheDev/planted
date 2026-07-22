import { configureStore } from '@reduxjs/toolkit';
import weatherServiceReducer from './slices/weatherServiceSlice';
// import plantSeviceReducer from './slices/plantServiceSlice';
import { plantApi } from './reduxApis/plantApi';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
        weatherServiceReducer,
        // plantSeviceReducer,
        [plantApi.reducerPath]: plantApi.reducer,
    },
    middleware: (getDefault) => getDefault().concat(plantApi.middleware),
});

export default store;