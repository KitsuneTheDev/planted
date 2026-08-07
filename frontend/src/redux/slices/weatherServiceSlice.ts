import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherService } from '../../services/WeatherService';
import type { Weather } from "@planted/types";
import type { Coordinates } from "../../types/common.type";

export interface weatherState {
    coordinates: Coordinates | null,
    weatherServiceData: Weather | null,
    weatherServiceDataLoading: boolean,
    weatherServiceDataError: string | null,
}

const initialState: weatherState = {
    coordinates: null,
    weatherServiceData: null,
    weatherServiceDataLoading: false,
    weatherServiceDataError: null,
}

export const getWeatherData = createAsyncThunk<
    Weather,
    Coordinates
    >(
    "weather/getWeatherData", async (coordinates, { rejectWithValue }) => {
        try {
            const response = await WeatherService.getWeatherData(coordinates);

            if(response?.isError) {
                return rejectWithValue(response.responseData.error || 'No response from weather service.');
            } else {
                return response.responseData;
            }
        } catch(error) {
            const errorMessage: string = `Unknown error: ${error}`;

            return rejectWithValue(errorMessage);
        }
    }
);

const weatherServiceSlice = createSlice(
    {
        name: "weatherService",
        initialState,
        reducers: {
            // REDUCERS HERE
        },
        extraReducers: (builder) => {
            builder.addCase(getWeatherData.pending, (state) => {
                state.weatherServiceDataLoading = true;
                state.weatherServiceData = null;
                state.weatherServiceDataError = null;
            }).addCase(getWeatherData.fulfilled, (state, action) => {
                state.weatherServiceDataLoading = false;
                state.weatherServiceData = action.payload;
                state.weatherServiceDataError = null;
            }).addCase(getWeatherData.rejected, (state, action) => {
                state.weatherServiceDataLoading = false;
                state.weatherServiceData = null;
                state.weatherServiceDataError = action.payload as string;
            });
        }
    }
);

export default weatherServiceSlice.reducer;

