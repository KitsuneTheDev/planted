import { ApiClient } from "../ApiClient.js";
export class QualityApi {
    #client;
    constructor() {
        this.#client = new ApiClient('https://api.openweathermap.org/data/2.5/air_pollution');
    }
    async getCurrentQuality(coord) {
        const response = await this.#client.get(`?lat=${coord.lat}&lon=${coord.lon}`);
        if (response.isError) {
            throw new Error(response.responseData.error);
        }
        return response.responseData;
    }
}
//# sourceMappingURL=quality.api.js.map