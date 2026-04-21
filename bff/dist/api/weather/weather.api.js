import { ApiClient } from "../ApiClient.js";
export class WeatherApi {
    #client;
    constructor() {
        this.#client = new ApiClient('https://api.openweathermap.org/data/2.5/weather');
    }
    async getCurrentWeather(coord) {
        const response = await this.#client.get(`?lat=${coord.lat}&lon=${coord.lon}`);
        if (response.isError) {
            throw new Error(response.responseData.error);
        }
        return response.responseData;
    }
}
//# sourceMappingURL=weather.api.js.map