import { WeatherApi } from "../api/weather/weather.api.js";
import { QualityApi } from "../api/weather/quality.api.js";
import type { Coordinates } from "../type/common.type.js";
import type { Weather, WeatherCombined } from '@planted/types';
import { aqiMap } from "../constants/aqiMap.js";
import dayjs from "dayjs";

const weatherApi = new WeatherApi();
const qualityApi = new QualityApi();

export async function getCurrentWeather(coord: Coordinates, apis = {weatherApi, qualityApi}): Promise<Weather> {

    const [ weatherResult, qualityResult ] = await Promise.allSettled([apis.weatherApi.getCurrentWeather(coord), apis.qualityApi.getCurrentQuality(coord)]);
    
    const weather = weatherResult.status === 'fulfilled' ? weatherResult.value : null;
    const quality = qualityResult.status === 'fulfilled' ? qualityResult.value : null;


    const currentWeatherData = {
        coord: weather?.coord,
        temp: weather?.main.temp ? Math.round(weather?.main.temp) : -1,
        feels_like: weather?.main.feels_like ? Math.round(weather?.main.temp) : -1,
        weather_detail: {
            humidity: weather?.main.humidity ? weather.main.humidity : -1,
            wind: weather?.wind.speed ? weather.wind.speed : -1,
            pressure: weather?.main.pressure ? weather.main.pressure : -1,
            visibility: weather?.visibility ? Math.round(weather.visibility) / 1000 : -1,
        },
        quality_main: {
            aqi: quality?.list[0]?.main.aqi ? quality.list[0].main.aqi : -1,
            aqi_detail: aqiMap[quality?.list[0]?.main.aqi || 0] || 'No Data',
        },
        quality_detail: {
            pm2_5: quality?.list[0]?.components.pm2_5 ? quality.list[0].components.pm2_5 : -1,
            pm10: quality?.list[0]?.components.pm10 ? quality.list[0].components.pm10 : -1,
            no2: quality?.list[0]?.components.no2 ? quality.list[0].components.no2 : -1,
        },
        daytime: {
            sunrise: weather?.sys.sunrise && weather.timezone ? dayjs((weather.sys.sunrise + weather.timezone) * 1_000).format('HH:MM') : 'No Data',
            sunset: weather?.sys.sunset && weather.timezone ? dayjs((weather.sys.sunset + weather.timezone) * 1_000).format('HH:MM') : 'No Data',
        }
    }

    return currentWeatherData;
}