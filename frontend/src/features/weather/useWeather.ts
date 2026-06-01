import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { getWeatherData } from "../../redux/slices/weatherServiceSlice";

export function useWeather() {
    const { weatherServiceData } = useSelector((state: RootState) => state.weatherServiceReducer);
    const dispatch = useDispatch<AppDispatch>();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getWeatherData({lat: 28.6139, lon: 77.2090}));
    }, [dispatch]);

    const handleToggleClick = () => {
        setIsExpanded(prev => !prev);
    }

    return { weatherServiceData, isExpanded, handleToggleClick }
}