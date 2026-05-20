import type { Coordinates } from "../../type/common.type.js";
import type { CurrentWeatherResponse } from "../../type/weather.type.js";
import { ApiClient } from "../ApiClient.js";

export class WeatherApi {
    #client: ApiClient;

    constructor() {
        this.#client = new ApiClient('https://api.openweathermap.org/data/2.5/weather', process.env.OPEN_WEATHER_API_KEY);
    }

    async getCurrentWeather(coord: Coordinates): Promise<CurrentWeatherResponse> {
        const response = await this.#client.get<CurrentWeatherResponse>(`?lat=${coord.lat}&lon=${coord.lon}`);

        if(response.isError) {
            throw new Error((response.responseData as {error: string}).error);
        }

        return response.responseData as CurrentWeatherResponse;
    }
}