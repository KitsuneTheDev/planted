import express from 'express';
import { asyncWrapper } from '../util/asyncWrapper';
import { fetchAllPlants } from '../controller/plant.controller';
import { searchByQuery } from '../controller/cityQuery.controller';

const router = express.Router();

router.get('/plants', asyncWrapper(fetchAllPlants));

export default router;