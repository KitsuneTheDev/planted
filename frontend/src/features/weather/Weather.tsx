import style from './Weather.module.css';
import type { ReactElement } from "react";
import { WeatherDetail } from './WeatherDetail';
import { useWeather } from './useWeather';
import { WeatherMain } from './WeatherMain';


export default function Weather(): ReactElement {

    const { isExpanded, handleToggleClick, weatherServiceData } = useWeather();

    return(
        <div className={`${style.weatherContainer} ${style.collapsible}  ${isExpanded ? style.expanded : ''}`}>
            <div className={`${style.toggleContainer}`} onClick={handleToggleClick}>
                {isExpanded ? 'Hide Details' : 'See Details'}
            </div>
            <WeatherMain weatherServiceData={weatherServiceData} />
            <WeatherDetail isExpanded={isExpanded} weatherServiceData={weatherServiceData} />
        </div>
    );
}