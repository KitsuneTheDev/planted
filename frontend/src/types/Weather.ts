export interface WeatherSnapshot {
    weather_code: number,
    temp: number,
    clouds: number,
    dt: number,
    humidity: number,
    sunrise?: number,
    sunset?: number,
    wind_speed: number,
    uvi: number
}

export interface WeatherResponse {
    current: WeatherSnapshot,
    daily: WeatherSnapshot[],
}

export interface WeatherResponseHourly {
    hourly: WeatherSnapshot[],
}