import type { WeatherCombined } from "@planted/types";
import type { Coordinates } from "../types/common.type";
import { ApiClient } from "./ApiClient";

export class WeatherService {
    private static client: ApiClient | null = null;

    constructor() {}

    private static getClient(): ApiClient {
        if(!WeatherService.client) {
            WeatherService.client = new ApiClient('/api/weather/');
        }

        return WeatherService.client;
    }

    static async getWeatherData(coord: Coordinates): Promise<WeatherCombined | void>{            
        try {
            const client = WeatherService.getClient();
            const response = await client.get<WeatherCombined>(`${coord.lon}/${coord.lat}`);
            return response;
        } catch(error) {
            console.error(`Could not get weather data. Error: ${error}`);
        }
    }
}

/*
TODO:
    MAKE STATIC SINGLETON AFTER IMPLEMENTING REDUX TO THE PROJECT
*/