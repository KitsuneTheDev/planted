import type { ApiResponse } from "../types/api.type.ts";

export class ApiClient {
    #baseUrl: string;

    constructor(baseUrl: string) {
        this.#baseUrl = baseUrl;
    }

    async get<T>(endpoint: string): Promise<ApiResponse<T>> {
        const response: ApiResponse<T> = await this.#send<T>(endpoint, 'GET');
        
        if(response.isError) {
            console.error(`Could not fetch data`);
            return response;
        } else {
            return response;
        }
    }

    async #send<T>(endpoint: string, method: string): Promise<ApiResponse<T>>{
        const response = await fetch(`${this.#baseUrl}${endpoint}`, {
            method,
        });

        if(!response.ok) {
            const error = `Could not fetch data! ${response}`;
            return {
                responseData: {error},
                isError: true
            }
        } else {
            const data = await response.json() as T;
            return {
                responseData: data,
                isError: false,
            };
        }
    }
}