import type { InferAttributes, Model } from "sequelize";
import City from "../db/models/City";
import { getCityByName } from "../repository/cityRepo";

export async function findCities(query: string) {
    const cities: Array<InferAttributes<City>> = await getCityByName(query);

    return cities;
}