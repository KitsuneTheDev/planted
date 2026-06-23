import style from './Weather.module.css';
import type { ReactElement } from "react";
import { useWeather } from './useWeather';
import WeatherDetail from './WeatherDetail';
import WeatherMain from './WeatherMain';
import QualityMain from './QualityMain';
import QualityDetail from './QualityDetail';
import DayTime from './DayTime';
import Grid from '../../components/Grid/Grid';
import Row from '../../components/Row/Row';
import { CircleGauge, Droplet, Eye, Sunrise, Sunset, Wind } from 'lucide-react';

export default function Weather(): ReactElement {

    const { weatherServiceData } = useWeather();

    return(
        <div className={style.contentWrapper}>
            <Row>
                <WeatherMain temp={Math.round(weatherServiceData?.temp || 0)} />
            </Row>
            <hr />
            <Grid>
                <WeatherDetail 
                    humidity = {{
                        label: 'Humidity',
                        value: `${Math.round(weatherServiceData?.weather_detail.humidity || 0)} %`,
                        icon: <Droplet color='#bbb7b5' />
                    }}

                    wind = {{
                        label: 'Wind',
                        value: `${weatherServiceData?.weather_detail.wind || 0} m/s`,
                        icon: <Wind color='#bbb7b5' />
                    }}

                    pressure = {{
                        label: 'Pressure',
                        value: `${weatherServiceData?.weather_detail.pressure || 0} hPa`,
                        icon: <CircleGauge color='#bbb7b5' />
                    }}

                    visibility = {{
                        label: 'Visibility',
                        value: `${Math.round(weatherServiceData?.weather_detail.visibility || 0)} km`,
                        icon: <Eye color='#bbb7b5' />
                    }}
                />
            </Grid>
            <hr />
            <Row>
                <QualityMain aqi={weatherServiceData?.quality_main.aqi || 0} aqiDetail={weatherServiceData?.quality_main.aqi_detail} />
            </Row>
            <hr className={style.optionalHr} />
            <Row>
                <QualityDetail pm2_5={{label: 'PM2.5', value: weatherServiceData?.quality_detail.pm2_5 || 0, unit: 'µg/m³'}} pm10={{label: 'PM10', value: weatherServiceData?.quality_detail.pm10 || 0, unit: 'µg/m³'}} no2={{label: 'NO2', value: weatherServiceData?.quality_detail.no2 || 0, unit: 'µg/m³'}} />
            </Row>
            <hr />
            <Row>
                <DayTime sunRise={{value: weatherServiceData?.daytime.sunrise || 'No Data', icon: <Sunrise color='#ffcf57' />}} sunSet={{value: weatherServiceData?.daytime.sunset || 'No Data', icon: <Sunset color='#ff4f4f' />}} />
            </Row>
        </div>
    );
}