import type { Coordinates } from "../../type/common.type.js";
import type { CurrentQualityResponse } from '../../type/quality.type.js';
import { ApiClient } from "../ApiClient.js";

export class QualityApi {
    #client: ApiClient;

    constructor() {
        this.#client = new ApiClient('https://api.openweathermap.org/data/2.5/air_pollution?unit=metric&', process.env.OPEN_WEATHER_API_KEY);
    }

    async getCurrentQuality(coord: Coordinates): Promise<CurrentQualityResponse>{
        const response = await this.#client.get<CurrentQualityResponse>(`lat=${coord.lat}&lon=${coord.lon}`);

        if(response.isError) {
            throw new Error((response.responseData as {error: string}).error);
        }

        return response.responseData as CurrentQualityResponse;
    }
}