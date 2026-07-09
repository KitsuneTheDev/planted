import { initModels, sequelize } from "../config";
import { seedCity } from "./seedCity";
import { seedPlant } from "./seedPlant";

initModels();
await sequelize.authenticate();

await seedCity();
await seedPlant();

await sequelize.close();