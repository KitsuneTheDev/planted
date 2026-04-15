import type { NextFunction, Response, Request} from "express";
import { getCurrentWeather } from "../service/weather.service.js";
import type { CurrentWeatherResponse } from "../type/weather.type.js";

export async function getCurrentWeatherData (req: Request, res: Response, next: NextFunction) {
    try {
        const currentWeatherData = await getCurrentWeather();
        res.status(200).json(currentWeatherData);
    } catch(error) {
        next(error);
    }
}