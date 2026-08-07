import type { IClimatologyResponse, ApiResponse } from "@planted/types";
import { ApiClient } from "./ApiClient";
import type { Coordinates } from "../types/common.type";

export class ClimatologyService {
    private  static client: ApiClient | null = null;

    private static getClient(): ApiClient {
        if(!ClimatologyService.client) {
            ClimatologyService.client = new ApiClient('/api/climatology');
        }

        return ClimatologyService.client;
    }

    static async getClimatologyData(coord: Coordinates): Promise<ApiResponse<IClimatologyResponse>> {
        const client = ClimatologyService.getClient();
        console.log(coord);
        const response = client.get<IClimatologyResponse>(`?lon=${coord.lon}&lat=${coord.lat}`);

        return response;
    }
}