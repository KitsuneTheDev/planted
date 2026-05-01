import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: weatherServiceReducer,
});

export default store;