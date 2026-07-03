import City from "../db/models/City";
import { Op } from 'sequelize';
import type { InferAttributes, Model } from "sequelize";

export const getCityByName = async (query: string, page: number) => {

    const cityResponse: Array<InferAttributes<Model>> = await City.findAll({
        where: {
            city: {
                [Op.iLike]: `${query}%`
            }
        },
        limit: 20,
        offset: 20*(page - 1),
    });

    return cityResponse;
}