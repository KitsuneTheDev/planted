import type { ApiResponse } from "../types/api.type.ts";

export class ApiClient {
    #baseUrl: string;

    constructor(baseUrl: string) {
        this.#baseUrl = baseUrl;
    }

    async get(endpoint: string): Promise<ApiResponse<T>> {

    }
}