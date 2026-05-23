import style from './Weather.module.css';
import { useEffect, useState, type ReactElement } from "react";
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store'
import { getWeatherData } from '../../redux/slices/weatherServiceSlice';

export default function Weather(): ReactElement {

    const { weatherServiceData } = useSelector((state: RootState) => state.weatherServiceReducer);
    const dispatch = useDispatch<AppDispatch>();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getWeatherData({lat: 40, lon: 50}));   
    }, []);

    useEffect(() => {
        console.log(weatherServiceData);
    }, [weatherServiceData])

    const handleToggleClick = () => {
        setIsExpanded(prev => !prev);
    }

    return(
        <div className={`${style.weatherContainer}  ${isExpanded ? style.expanded : ''}`}>
            <div className={`${style.toggleContainer}`} onClick={handleToggleClick}>
                {isExpanded ? 'Hide Details' : 'See Details'}
            </div>
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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}