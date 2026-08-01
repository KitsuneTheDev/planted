import type { IClimatologyResponse } from "@planted/types";
import { ClimatologyApi } from "../api/climatology/climatology.api";
import type { Coordinates } from "../type/common.type";

const climatologyApi = new ClimatologyApi();

export async function getClimatology(coord: Coordinates): Promise<IClimatologyResponse> {
    const climatologyResult = await climatologyApi.getClimatology(coord);
    console.log(climatologyResult);

    return climatologyResult;
}