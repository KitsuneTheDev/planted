// ALLSKY_SFC_PAR_TOT,ALLSKY_SFC_UV_INDEX_MAX,MAX_EQUIV_NO_SUN_DAYS,DAY_HOURS,T2M_MIN,T2M_MAX,TSOIL1,GWETROOT,RH2M,FROST_DAYS

import type { Coordinates } from "../../type/common.type";
import type { INasaResponse, IClimatologyResponse } from "@planted/types";
import { ApiClient } from "../ApiClient";

export class ClimatologyApi {
    #client: ApiClient;

    constructor() {
        this.#client = new ApiClient('https://power.larc.nasa.gov/api/temporal/climatology/point');
    }

    async getClimatology(coord: Coordinates): Promise<IClimatologyResponse>{
        console.log('HERE ans coord ->', coord);

        const params = new URLSearchParams({
            start: '2024',
            end: '2025',
            latitude: coord.lat.toString(),
            longitude: coord.lon.toString(),
            community: 'ag',
            parameters: 'ALLSKY_SFC_PAR_TOT,ALLSKY_SFC_UV_INDEX_MAX,MAX_EQUIV_NO_SUN_DAYS,DAY_HOURS,T2M_MIN,T2M_MAX,TSOIL1,GWETROOT,RH2M,FROST_DAYS',
            format: 'json',
            header: 'false',
        });

        const nasaResponse = await this.#client.get<INasaResponse>(`?${params.toString()}`);

        if (nasaResponse.isError) {
            throw new Error(nasaResponse.responseData.error);
        }

        return nasaResponse.responseData.properties.parameter;
    }
}