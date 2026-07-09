import { createReadStream } from "node:fs";
import csv from "csv-parser";
import path from "path";
import Plant from "../models/Plant";
import type { InferAttributes } from "sequelize";
import { randomUUID, type UUID } from "node:crypto";

const CHUNK_SIZE: number = 1_000;

interface plantRow {
    plant_name: string;
    growth: string;
    soil: string;
    sunlight: string;
    watering: string;
    fertilization: string;
}

export async function seedPlant() {
    const rows: Array<InferAttributes<Plant>> = [];

    await new Promise((resolve, reject) => {
        createReadStream(path.resolve('src/db/seeders/data/plantsData.csv'))
            .pipe(csv())
            .on('data', (row: plantRow) => {
                rows.push({
                    plant_name: row.plant_name,
                    growth: row.growth,
                    soil: row.soil,
                    sunlight: row.sunlight,
                    watering: row.watering,
                    fertilization: row.fertilization,
                });
            })
            .on('end', resolve)
            .on('error', reject);
    });

    for (let i  = 0; i < rows.length; i += CHUNK_SIZE) {
        await Plant.bulkCreate(rows.slice(i, i + CHUNK_SIZE));
        console.log(`Inserted ${Math.min((i + CHUNK_SIZE), rows.length)} / ${rows.length}`);
    }

    console.log('Plants inserted into database. Table -> plants');
}