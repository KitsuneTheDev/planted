import { sequelize, initModels } from "../config";

initModels();
await sequelize.authenticate();

await sequelize.query(`
    CREATE EXTENSION IF NOT EXISTS pg_trgm;
    CREATE INDEX IF NOT EXISTS idx_cities_name_trgm ON cities USING GIN (city gin_trgm_ops);
`);

console.log('Index created in for -> TABLE_NAME: cities, COLUMN_NAME: city');
await sequelize.close();