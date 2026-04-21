import type { NextFunction, Response, Request} from "express";
import { getCurrentWeather } from "../service/weather.service.js";
import type { Coordinates } from "../type/common.type.js";

export async function getCurrentWeatherData (req: Request, res: Response, next: NextFunction) {
    try {
        const lon = req.params.lon;
        const lat = req.params.lat;

        if(lon === undefined || lat === undefined) {
            res.status(400).send('Cannot get weather data. Lat and long required.');
            return;
        }

        const coord: Coordinates = {
            lon: Number.parseFloat(`${lon}`),
            lat: Number.parseFloat(`${lat}`),
        }

        const currentWeatherData = await getCurrentWeather(coord);
        
        res.status(200).json(currentWeatherData);
    } catch(error) {
        next(error);
    }
}