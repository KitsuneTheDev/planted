import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PlantService } from "../../services/PlantService";
import type { IPlant } from "@planted/types";

export interface plantState {
    plantServiceData: Array<IPlant> | [];
    plantServiceDataLoading: boolean;
    plantServiceDataError: string | null;
}

const initialState: plantState = {
    plantServiceData: [],
    plantServiceDataLoading: false,
    plantServiceDataError: null,
}

export const getAllPlantsData = createAsyncThunk(
    "plants/getAllPlantsData", async (page: number = 0, { rejectWithValue }) => {
        try{
            const response = await PlantService.getAllPlantsData(page);

            if(response?.isError) {
                return rejectWithValue(response.responseData.error || 'No response from plant service.');
            } else {
                return response.responseData;
            }
        } catch (error){
            const errorMessage: string = `Unknown error: ${error}`;
            
            return rejectWithValue(errorMessage);
        }
    }
);

const plantServiceSlice = createSlice(
    {
        name: "plantService",
        initialState,
        reducers: {
            // REDUCERS HERE
        },
        extraReducers: (builder) => {
            builder.addCase(getAllPlantsData.pending, (state) => {
                state.plantServiceDataLoading = true;
                state.plantServiceData = [];
                state.plantServiceDataError = null;
            }).addCase(getAllPlantsData.fulfilled, (state, action) => {
                state.plantServiceDataLoading = false;
                state.plantServiceData = action.payload;
                state.plantServiceDataError = null;
            }).addCase(getAllPlantsData.rejected, (state, action) => {
                state.plantServiceDataLoading = false;
                state.plantServiceData = [];
                state.plantServiceDataError = action.payload as string;
            });
        }
    }
);

export default plantServiceSlice.reducer;