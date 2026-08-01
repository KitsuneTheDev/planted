import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IClimatologyResponse } from "@planted/types";
import { ClimatologyService } from "../../services/ClimatologyService";
import type { Coordinates } from "../../types/common.type";

export const climatologyApi = createApi({
    reducerPath: 'climatologyApi',
    baseQuery: fakeBaseQuery<string>(),
    tagTypes: ['Climatology'],
    endpoints: (builder) => ({
        getClimatologyData: builder.query<IClimatologyResponse, Coordinates>({
            queryFn: async (coord: Coordinates) => {
                try {
                    const response = await ClimatologyService.getClimatologyData(coord);

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