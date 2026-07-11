import type { InferAttributes, Model } from "sequelize";
import { getAllPlants } from "../repository/plantRepo";

export async function findAllPlants(page: number) {
    const plants: Array<InferAttributes<Model>> = await getAllPlants(page);

    return plants;
}