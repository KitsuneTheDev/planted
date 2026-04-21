import { getCurrentWeather } from "../service/weather.service.js";
export async function getCurrentWeatherData(req, res, next) {
    try {
        const lon = req.params.lon;
        const lat = req.params.lat;
        if (lon === undefined || lat === undefined) {
            res.status(400).send('Cannot get weather data. Lat and long required.');
            return;
        }
        const coord = {
            lon: Number.parseFloat(`${lon}`),
            lat: Number.parseFloat(`${lat}`),
        };
        const currentWeatherData = await getCurrentWeather(coord);
        res.status(200).json(currentWeatherData);
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=weather.controller.js.map