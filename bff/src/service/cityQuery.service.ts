import type { InferAttributes, Model } from "sequelize";
import City from "../db/models/City";
import { getCityByName } from "../repository/cityRepo";

export async function findCities(query: string, page: number) {
    const cities: Array<InferAttributes<City>> = await getCityByName(query, page);

    return cities;
}