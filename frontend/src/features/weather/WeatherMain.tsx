import type { WeatherCombined } from '@planted/types';
import style from './Weather.module.css';

interface WeatherMainProps {
    weatherServiceData: WeatherCombined | null;
}

export function WeatherMain({ weatherServiceData }: WeatherMainProps) {

    return(
        <div className={style.weatherMain}>
            <div className={style.primary}>
                <div className={style.temp}>
                    <div className={style.value}>
                        <div className={style.data}>
                            {Math.round(weatherServiceData?.weather?.main.temp || 0)}
                        </div>
                        <div className={style.detail}>
                            &deg;C
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.secondary}>
                <div className={style.feelslike}>
                    <div className={style.label}>
                        But you think it is
                    </div>
                    <div className={style.value}>
                        <div className={style.data}>
                            {Math.round(weatherServiceData?.weather?.main.feels_like || 0)}
                        </div>
                        <div className={style.detail}>
                            &deg;C
                        </div>
                    </div>
                </div>
                <div className={style.humidity}>
                    <div className={style.label}>
                        And humidity is
                    </div>
                    <div className={style.value}>
                        <div className={style.data}>
                            {Math.round(weatherServiceData?.weather?.main.humidity || 0)}
                        </div>
                        <div className={style.detail}>
                            %
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}