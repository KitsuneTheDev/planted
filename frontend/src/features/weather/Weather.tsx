import style from './Weather.module.css';
import type { ReactElement } from "react";
import { aqiMap } from '../../constants/aqiMap';
import { useWeather } from './useWeather';
import WeatherDetail from './WeatherDetail';
import WeatherMain from './WeatherMain';
import QualityMain from './QualityMain';
import QualityDetail from './QualityDetail';
import DayTime from './DayTime';
import Grid from '../../components/Grid/Grid';
import Row from '../../components/Row/Row';

export default function Weather(): ReactElement {

    const { weatherServiceData } = useWeather();
    console.log(weatherServiceData);
    return(
        <div className={style.contentWrapper}>
            <Row>
                <WeatherMain temp={Math.round(weatherServiceData?.weather?.main.temp || 0)} />
            </Row>
            <hr />
            <Grid>
                <WeatherDetail
                    humidity={`${Math.round(weatherServiceData?.weather?.main.humidity || 0)} %`}
                    feels={`${Math.round(weatherServiceData?.weather?.main.feels_like || 0)} °C`}
                    wind={`${Math.round(weatherServiceData?.weather?.wind.speed || 0)} km/h`}
                    aqi={`${aqiMap[weatherServiceData?.quality?.list[0]?.main.aqi || 0]}`}
                />
            </Grid>
            <hr />
            <Row>
                <QualityMain aqi={weatherServiceData?.quality?.list[0]?.main.aqi || 0} aqiDetail={aqiMap[weatherServiceData?.quality?.list[0]?.main.aqi || 0]} />
            </Row>
            <hr />
            <Grid>
                <QualityDetail />
            </Grid>
            <hr />
            <Grid>
                <DayTime />
            </Grid>
        </div>
    );
}