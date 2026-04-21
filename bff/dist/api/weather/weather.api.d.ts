import type { Coordinates } from "../../type/common.type.js";
import type { CurrentWeatherResponse } from "../../type/weather.type.js";
export declare class WeatherApi {
    #private;
    constructor();
    getCurrentWeather(coord: Coordinates): Promise<CurrentWeatherResponse>;
}
//# sourceMappingURL=weather.api.d.ts.map