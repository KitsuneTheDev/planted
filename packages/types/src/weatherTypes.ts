export interface Weather {
    coord: {lat: number, lon:number};
    temp: number;
    feels_like: number;
    weather_detail: WeatherDetail;
    quality_main: QualityMain;
    quality_detail: QualityDetail;
    daytime: Daytime;
}

export interface WeatherDetail {
    humidity: number;
    wind: number;
    pressure: number;
    visibility: number;
}

export interface QualityMain {
    aqi: number;
    aqi_detail: string;
}

export interface QualityDetail {
    pm2_5: number;
    pm10: number;
    no2: number;
}

export interface Daytime {
    sunrise: string;
    sunset: string;
}