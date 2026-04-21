import { WeatherApi } from "../api/weather/weather.api.js";
import { QualityApi } from "../api/weather/quality.api.js";
import type { Coordinates } from "../type/common.type.js";
import type { WeatherCombined } from "../type/weatherCombined.type.js";

const weatherApi = new WeatherApi();
const qualityApi = new QualityApi();

export async function getCurrentWeather(coord: Coordinates): Promise<WeatherCombined> {
    const [weather, quality] = await Promise.all([weatherApi.getCurrentWeather(coord), qualityApi.getCurrentQuality(coord)]);
    const currentWeatherData = {weather: weather, quality: quality}

    return currentWeatherData;
}