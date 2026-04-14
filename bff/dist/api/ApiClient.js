export class ApiClient {
    #baseUrl;
    constructor(basuUrl) {
        this.#baseUrl = basuUrl;
    }
    async get(endpoint) {
        try {
            const response = await this.#send(endpoint, 'GET');
            return response;
        }
        catch (error) {
            throw error;
        }
    }
    async #send(endpoint, method) {
        try {
            console.log(process.env.OPEN_WEATHER_API_KEY);
            const response = await fetch(`${this.#baseUrl}${endpoint}&appid=${process.env.OPEN_WEATHER_API_KEY}`, {
                method: method
            });
            if (!response.ok) {
                throw new Error('No response!');
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            throw error;
        }
    }
}
//# sourceMappingURL=ApiClient.js.map