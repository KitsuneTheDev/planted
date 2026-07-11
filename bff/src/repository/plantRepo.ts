import type { IPlant } from '@planted/types';
import Plant from '../db/models/Plant';
import type { InferAttributes, Model } from 'sequelize';

export const getAllPlants = async (page: number) => {
    const plantResponse: Array<InferAttributes<Model>> = await Plant.findAll({
        limit: 20,
        offset: 20 * (page - 1),
    });

    console.log(plantResponse);

    return plantResponse;
}