import style from './Weather.module.css';
import type { ReactElement } from "react";
import { WeatherDetail } from './WeatherDetail';
import { useWeather } from './useWeather';
import { WeatherMain } from './WeatherMain';
import { aqiMap } from '../../constants/aqiMap';
import Grid from '../../components/grid/Grid'

export default function Weather(): ReactElement {

    const { weatherServiceData } = useWeather();
    console.log(weatherServiceData);
    return(
        <>
            <WeatherMain temp={Math.round(weatherServiceData?.weather?.main.temp || 0)} />
            <Grid column={4}>
                <WeatherDetail
                    humidity={`${Math.round(weatherServiceData?.weather?.main.humidity || 0)} %`}
                    feels={`${Math.round(weatherServiceData?.weather?.main.feels_like || 0)} °C`}
                    wind={`${Math.round(weatherServiceData?.weather?.wind.speed || 0)} km/h`}
                    aqi={`${aqiMap[weatherServiceData?.quality?.list[0]?.main.aqi]}`}
                />
            </Grid>
        </>
    );
}