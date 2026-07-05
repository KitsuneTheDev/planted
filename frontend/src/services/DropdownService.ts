import type { ApiResponse } from "@planted/types/src/api.type";
import type { DropdownData } from "@planted/types";
import { ApiClient } from "./ApiClient";

export class DropdownService {
    private static client: ApiClient | null = null;

    constructor() {}

    private static getClient(): ApiClient {
        if(!DropdownService.client) {
            DropdownService.client = new ApiClient('/api/search');
        }

        return DropdownService.client;
    }

    static async getDropdownData(query: string): Promise<ApiResponse<DropdownData[]>> {
        const client = DropdownService.getClient();
        const response = await client.get<DropdownData[]>(`?city=${query}`);
        return response;
    }
}