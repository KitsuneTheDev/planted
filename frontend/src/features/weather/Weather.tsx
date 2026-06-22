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
import { CircleGauge, Droplet, Eye, Sunrise, Sunset, Wind } from 'lucide-react';
import dayjs from 'dayjs';

export default function Weather(): ReactElement {

    const { weatherServiceData } = useWeather();
    console.log(weatherServiceData);
    const timezone = weatherServiceData?.weather?.timezone;
    const sunriseStamp = weatherServiceData?.weather?.sys.sunrise;
    const sunsetStamp = weatherServiceData?.weather?.sys.sunset;
    const daytimeData = {
        sunrise: timezone && sunriseStamp ? dayjs((sunriseStamp + timezone) * 1_000).format('HH:MM') : 'No sunrise data',
        sunset: timezone && sunsetStamp ? dayjs((sunsetStamp + timezone) * 1_000).format('HH:MM') : 'No sunset data', 
    }

    const qualityDetail = {
        pm2_5: {label: 'PM2.5', value: weatherServiceData?.quality?.list[0]?.components.pm2_5 || 'No data', unit: 'µg/m³'},
        pm10: {label: 'PM10', value: weatherServiceData?.quality?.list[0]?.components.pm10 || 'No data', unit: 'µg/m³'},
        no2: {label: 'NO₂', value: weatherServiceData?.quality?.list[0]?.components.no2 || 'No data', unit: 'µg/m³'}
    }

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
            <hr className={style.optionalHr} />
            <Row>
                <QualityDetail pm2_5={qualityDetail.pm2_5} pm10={qualityDetail.pm10} no2={qualityDetail.no2} />
            </Row>
            <hr />
            <Row>
                <DayTime sunRise={{value: daytimeData.sunrise, icon: <Sunrise color='#ffcf57' />}} sunSet={{value: daytimeData.sunset, icon: <Sunset color='#ff4f4f' />}} />
            </Row>
        </div>
    );
}