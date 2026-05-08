import { Sequelize } from "sequelize";
import { Plant } from './models/Plant';

export const sequelize = new Sequelize(
    process.env.POSTGRES_DB!,
    process.env.POSTGRES_USER!,
    process.env.POSTGRES_PASSWORD!,
   {
        host: process.env.POSTGRES_HOST!,
        port: Number.parseInt(process.env.POSTGRES_PORT!),
        dialect: "postgres",
        logging: false,
   }
);

export async function initDatabase() {
     initModels();
     await sequelize.authenticate();
     await sequelize.sync();
};

export function initModels() {
     Plant.initModel(sequelize);
}

export const database = {
     sequelize,
}
