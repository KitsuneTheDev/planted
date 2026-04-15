import { WeatherApi } from "../api/weather/weather.api.js";
import type { Coord, CurrentWeatherResponse } from "../type/weather.type.js";

const weatherApi = new WeatherApi();

export async function getCurrentWeather(coord: Coord = {lat: 44.34, lon: 10.99}): Promise<CurrentWeatherResponse> {
    const currentWeatherData = await weatherApi.getCurrentWeather(coord);
    return currentWeatherData;
}