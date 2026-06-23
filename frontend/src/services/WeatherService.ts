import type { Weather } from "@planted/types";
import type { Coordinates } from "../types/common.type";
import { ApiClient } from "./ApiClient";
import type { ApiResponse } from "@planted/types/src/api.type";

export class WeatherService {
    private static client: ApiClient | null = null;

    constructor() {}

    private static getClient(): ApiClient {
        if(!WeatherService.client) {
            WeatherService.client = new ApiClient('/api/weather');
        }

        return WeatherService.client;
    }

    static async getWeatherData(coord: Coordinates): Promise<ApiResponse<Weather>>{            
        const client = WeatherService.getClient();
        const response = await client.get<Weather>(`?lon=${coord.lon}&lat=${coord.lat}`);
        return response;
    }
}