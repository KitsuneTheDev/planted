import type { CurrentWeatherResponse } from "./weather.type.js";
import type { CurrentQualityResponse } from "./quality.type.js";

export interface WeatherCombined {
    weather: CurrentWeatherResponse | null;
    quality: CurrentQualityResponse | null;
}