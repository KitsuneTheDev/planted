import { WeatherApi } from "../api/weather/weather.api.js";
import { QualityApi } from "../api/weather/quality.api.js";
import type { Coordinates } from "../type/common.type.js";
import type { WeatherCombined } from '@planted/types';

const weatherApi = new WeatherApi();
const qualityApi = new QualityApi();

export async function getCurrentWeather(coord: Coordinates, apis = {weatherApi, qualityApi}): Promise<WeatherCombined> {
    const [ weatherResult, qualityResult ] = await Promise.allSettled([apis.weatherApi.getCurrentWeather(coord), apis.qualityApi.getCurrentQuality(coord)]);
    
    const weather = weatherResult.status === 'fulfilled' ? weatherResult.value : null;
    const quality = qualityResult.status === 'fulfilled' ? qualityResult.value : null;

    const currentWeatherData = {weather: weather, quality: quality}

    return currentWeatherData;
}