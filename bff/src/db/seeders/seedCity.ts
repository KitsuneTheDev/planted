import { createReadStream } from "node:fs";
import csv from 'csv-parser';
import path from 'path';
import City from "../models/City";
import type { InferAttributes } from "sequelize";
import { initModels, sequelize } from "../config";

const CHUNK_SIZE: number = 1000;

interface cityRow {
    Country: string;
    City: string;
    Longtitude: number;
    Lattitude: number;
}

initModels();
await sequelize.authenticate();

async function seedCity() {
    const rows: Array<InferAttributes<City>>  = [];

    await new Promise((resolve, reject) => {
        createReadStream(path.resolve('src/db/seeders/data/citiesData.csv'))
            .pipe(csv())
            .on('data', (row: cityRow) => {
                rows.push({
                    country: row.Country,
                    city: row.City,
                    lon: row.Longtitude,
                    lat: row.Lattitude,
                });
            })
            .on('end', resolve)
            .on('error', reject);
    });

    for (let i = 0; i < rows.length; i+= CHUNK_SIZE) {
        await City.bulkCreate(rows.slice(i, i + CHUNK_SIZE));
        console.log(`Inserted ${Math.min((i + CHUNK_SIZE), rows.length)} / ${rows.length}`);
    }

    console.log('Cities inserted into databse. Table -> cities');
}

await seedCity();
await sequelize.close();