import type { IPlant } from '@planted/types';
import type { ApiResponse } from '@planted/types';
import { ApiClient } from './ApiClient';

export class PlantService {
    private static client: ApiClient | null = null;

    private static getClient(): ApiClient {
        if(!PlantService.client) {
            PlantService.client = new ApiClient('/api/plants');
        }

        return PlantService.client;
    } 

    static async getAllPlantsData(page: number): Promise<ApiResponse<Array<IPlant>>>{
        const client = PlantService.getClient();
        const response = await client.get<Array<IPlant>>(page ? `?page=${page}` : ``);

        return response;
    }
}