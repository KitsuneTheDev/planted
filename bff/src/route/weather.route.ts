import express from "express";
import { getCurrentWeatherData } from "../controller/weather.controller.js";
import { asyncWrapper } from "../util/asyncWrapper.js"

const router = express.Router();

router.get('/weather', asyncWrapper(getCurrentWeatherData));

export default router;