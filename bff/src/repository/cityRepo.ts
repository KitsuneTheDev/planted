import City from "../db/models/City";
import { Op } from 'sequelize';
import type { InferAttributes, Model } from "sequelize";

export const getCityByName = async (query: string) => {

    const cityResponse: Array<InferAttributes<Model>> = await City.findAll({
        where: {
            city: {
                [Op.iLike]: `%${query}%`
            }
        }
    });

    return cityResponse;
}