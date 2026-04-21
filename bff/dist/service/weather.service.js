import { WeatherApi } from "../api/weather/weather.api.js";
import { QualityApi } from "../api/weather/quality.api.js";
const weatherApi = new WeatherApi();
const qualityApi = new QualityApi();
export async function getCurrentWeather(coord) {
    const [weather, quality] = await Promise.all([weatherApi.getCurrentWeather(coord), qualityApi.getCurrentQuality(coord)]);
    const currentWeatherData = { weather: weather, quality: quality };
    return currentWeatherData;
}
//# sourceMappingURL=weather.service.js.map