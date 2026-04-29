import type { ApiResponse } from "../types/api.type.ts";

export class ApiClient {
    #baseUrl: string;

    constructor(baseUrl: string) {
        this.#baseUrl = baseUrl;
    }

    async get<T>(endpoint: string): Promise<ApiResponse<T>> {
        const response: ApiResponse<T> = await this.#send<T>(endpoint, 'GET');
        
        if(response.isError) {
            throw new Error(`response.error`);
        } else {
            return response;
        }
    }

    async #send<T>(endpoint: string, method: string): Promise<ApiResponse<T>>{
        const response = await fetch(`${this.#baseUrl}${endpoint}`, {
            method,
        });

        if(!response.ok) {
            const error = 'Cannot fetch data!';
            return {
                responseData: {error},
                isError: true
            }
        } else {
            return {
                responseData: response as T,
                isError: false,
            };
        }
    }
}