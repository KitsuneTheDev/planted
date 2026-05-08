import express, { type NextFunction } from "express";
import { getCurrentWeatherData } from "../controller/weather.controller.js";
import { asyncWrapper } from "../util/asyncWrapper.js"

const router = express.Router();

router.get('/weather/:lat/:lon', asyncWrapper(getCurrentWeatherData));

export default router;