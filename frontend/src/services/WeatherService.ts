import type { WeatherCombined } from "@planted/types";
import type { Coordinates } from "../types/common.type";
import { ApiClient } from "./ApiClient";

export class WeatherService {
    #client: ApiClient;

    constructor() {
        this.#client = new ApiClient('/api/weather/');
    }

    async getWeatherData(coord: Coordinates): Promise<WeatherCombined | void>{
        try {
            const response = await this.#client.get<WeatherCombined>(`${coord.lon}/${coord.lat}`);
            return response;
        } catch(error) {
            console.error(`Could not get weather data. Error: ${error}`);
        }
    }
}