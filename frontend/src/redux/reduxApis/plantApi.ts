import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPlant } from "@planted/types";
import { PlantService } from "../../services/PlantService";

export const plantApi = createApi({
    reducerPath: 'plantApi',
    baseQuery: fakeBaseQuery<string>(),
    tagTypes: ['Plant'],
    endpoints: (builder) => ({
        getAllPlantsData: builder.query<IPlant[], number>({
            queryFn: async (page = 0) => {
                try {
                    const response = await PlantService.getAllPlantsData(page);

                    if(response?.isError) {
                        return {error: response.responseData.error || `No response from plant service.`};
                    }

                    return {data: response.responseData};
                } catch(error) {
                    return {error: `Unknown error: ${error}`};
                }
            },
            providesTags: ['Plant']
        }),
    }),
});

export const { useGetAllPlantsDataQuery } = plantApi;