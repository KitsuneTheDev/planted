export class ApiClient {
    #baseUrl;
    constructor(baseUrl) {
        this.#baseUrl = baseUrl;
    }
    async get(endpoint) {
        try {
            const response = await this.#send(endpoint, 'GET');
            return {
                responseData: response,
                isError: false,
            };
        }
        catch (error) {
            let errorMessage = 'Unknown error!';
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            return {
                responseData: { error: errorMessage },
                isError: true,
            };
        }
    }
    async #send(endpoint, method) {
        const response = await fetch(`${this.#baseUrl}${endpoint}&appid=${process.env.OPEN_WEATHER_API_KEY}`, {
            method,
        });
        if (!response.ok) {
            throw new Error('No response!');
        }
        return await response.json();
    }
}
//# sourceMappingURL=ApiClient.js.map