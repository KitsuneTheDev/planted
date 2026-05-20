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
            <h1>Weather</h1>
           {/* <MiniCard header='Demo' value='Demo Text' detail='dets' />
           <MiniCard header='Demo' value='Demo Text' detail='dets' />
           <MiniCard header='Demo' value='Demo Text' detail='dets' />
           <MiniCard header='Demo' value='Demo Text' detail='dets' /> */}
        </div>
    );
}