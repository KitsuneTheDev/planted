import type { NextFunction, Response, Request} from "express";
import { getCurrentWeather } from "../service/weather.service.js";
import type { Coordinates } from "../type/common.type.js";
import { BadRequestError } from "../error/errors.js";

export async function getCurrentWeatherData (req: Request, res: Response, next: NextFunction) {
    const {lat, lon} = req.query;

    if(typeof lon !== "string" || typeof lat !== "string") {
        throw new BadRequestError("Latitude and longitude values are required!");
    }

    if(Array.isArray(lon) || Array.isArray(lat)) {
        throw new BadRequestError("Provide only one longitude-latitude pair!");
    }

    const numberLon = Number.parseFloat(lon);
    const numberLat = Number.parseFloat(lat);

    if(Number.isNaN(numberLat) || Number.isNaN(numberLon)) {
        throw new BadRequestError("Enter valid latitude and longitude value!");
    }

    if(-180 > numberLon || numberLon > 180) {
        throw new BadRequestError("Longitude must be in range of [-180, 180]!");
    }

    if(-90 > numberLat || numberLat > 90) {
        throw new BadRequestError("Latitude must be in range of [-90, 90]!");
    }

    const coord: Coordinates = {
        lon: numberLon,
        lat: numberLat,
    }

    const currentWeatherData = await getCurrentWeather(coord);
    
    res.status(200).json(currentWeatherData);
}