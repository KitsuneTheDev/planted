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
import { CircleGauge, Droplet, Eye, Wind } from 'lucide-react';

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
                    humidity = {{
                        label: 'Humidity',
                        value: `${Math.round(weatherServiceData?.weather?.main.humidity || 0)} %`,
                        icon: <Droplet />
                    }}

                    wind = {{
                        label: 'Wind',
                        value: `${weatherServiceData?.weather?.wind.speed || 0} m/s`,
                        icon: <Wind />
                    }}

                    pressure = {{
                        label: 'Pressure',
                        value: `${weatherServiceData?.weather?.main.pressure || 0} hPa`,
                        icon: <CircleGauge />
                    }}

                    visibility = {{
                        label: 'Visibility',
                        value: `${Math.round((weatherServiceData?.weather?.visibility || 0) / 1000)} km`,
                        icon: <Eye />
                    }}
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