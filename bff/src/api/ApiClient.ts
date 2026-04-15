import type { ApiResponse } from "../type/api.type.js";

export class ApiClient {
    #baseUrl: string;

    constructor(baseUrl: string) {
        this.#baseUrl = baseUrl;
    }

    async get<T>(endpoint: string): Promise<ApiResponse<T>> {
        try {
            const response = await this.#send<T>(endpoint, 'GET');
            return {
                responseData: response,
                isError: false,
            };
        } catch(error: unknown) {
            let errorMessage = 'Unknown error!';

            if(error instanceof Error) {
                errorMessage = error.message;
            }

            return {
                responseData: {error: errorMessage},
                isError: true,
            }
        }
    }

    async #send<T>(endpoint: string, method: string): Promise<T> {
        const response = await fetch(`${this.#baseUrl}${endpoint}&appid=${process.env.OPEN_WEATHER_API_KEY}`, {
            method,
        });

        if(!response.ok) {
            throw new Error('No response!');
        }

        return await response.json();
    }
}