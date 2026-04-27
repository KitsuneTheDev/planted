import type { ApiResponse } from "../types/api.type.ts";

export class ApiClient {
    #baseUrl: string;

    constructor(baseUrl: string) {
        this.#baseUrl = baseUrl;
    }

    async get<T>(endpoint: string): Promise<ApiResponse<T>> {
        const response = await this.#send(endpoint, 'GET')<T>;
    }

    async #send<T>(endpoint: string, method: string): Promise<ApiResponse<T>>{
        const response = await fetch(`${this.#baseUrl}${endpoint}`, {
            method,
        });

        if(!response.ok) {
            const error = 'Cannot fetch data!';
            return 
        }
    }
}