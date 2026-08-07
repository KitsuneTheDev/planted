import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IClimatologyResponse } from "@planted/types";
import { ClimatologyService } from "../../services/ClimatologyService";
import type { Coordinates } from "../../types/common.type";
import type { RootState } from "../store";

export const climatologyApi = createApi({
    reducerPath: 'climatologyApi',
    baseQuery: fakeBaseQuery<string>(),
    tagTypes: ['Climatology'],
    endpoints: (builder) => ({
        getClimatologyData: builder.query<IClimatologyResponse, void>({
            // YOU DON'T UNDESTAND THE LINE BELOW
            queryFn: async (_arg, api) => {
                try {
                    const state = api.getState() as RootState;
                    const coord: Coordinates = state.weatherServiceReducer?.coordinates || { lat: 41.01, lon: 28.9603};

                    console.log(coord);

                    const response = await ClimatologyService.getClimatologyData(coord);
                    console.log(response);

                    if(response?.isError) {
                        return {error: response.responseData.error || `No response from climatology service.`};
                    }

                    return {data: response.responseData}
                } catch(error) {
                    return {error: `Unknown error: ${error}`};
                }
            },
            providesTags: ['Climatology']
        }),
    }),
});

export const { useGetClimatologyDataQuery } = climatologyApi;