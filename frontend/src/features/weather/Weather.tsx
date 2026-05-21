import style from './Weather.module.css';
import { useEffect, type ReactElement } from "react";
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store'
import { getWeatherData } from '../../redux/slices/weatherServiceSlice';

export default function Weather(): ReactElement {

    const { weatherServiceData } = useSelector((state: RootState) => state.weatherServiceReducer);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getWeatherData({lat: 40, lon: 50}));   
    }, []);

    useEffect(() => {
        console.log(weatherServiceData);
    }, [weatherServiceData])

    return(
        <div className={style.weatherContainer}>
            <div className={style.weatherMain}>
                <div className={style.temp}>
                    <div className={style.value}>
                        {weatherServiceData?.weather?.main.temp}
                    </div>
                    <div className={style.detail}>
                        &deg;C
                    </div>
                </div>
                <div className={style.feelslike}>
                    <div className={style.value}>
                        {weatherServiceData?.weather?.main.feels_like}
                    </div>
                    <div className={style.detail}>
                        &deg;C
                    </div>
                </div>
                <div className={style.humidity}>
                    <div className={style.value}>
                        {weatherServiceData?.weather?.main.humidity}
                    </div>
                    <div className={style.detail}>
                        / 100
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