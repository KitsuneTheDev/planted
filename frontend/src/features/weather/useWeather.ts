import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { getWeatherData } from "../../redux/slices/weatherServiceSlice";

export function useWeather() {
    const { weatherServiceData } = useSelector((state: RootState) => state.weatherServiceReducer);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getWeatherData({lat: 28.6139, lon: 77.2090}));
    }, [dispatch]);

    return { weatherServiceData }
}