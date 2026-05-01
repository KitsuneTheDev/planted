import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherService } from '../../services/WeatherService';
import type { WeatherCombined } from "@planted/types";

interface weatherState {
    weatherServiceData: WeatherCombined | null,
    weatherServiceDataLoading: boolean
}

const initialState: weatherState = {
    weatherServiceData: null,
    weatherServiceDataLoading: false,
}

