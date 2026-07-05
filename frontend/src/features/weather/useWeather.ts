import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { getWeatherData } from "../../redux/slices/weatherServiceSlice";
import { loadFromLocal } from "../../utils/localStorage";
import type { Coord } from "@planted/types/src/weather.type";

export function useWeather() {
    const { weatherServiceData, weatherServiceDataLoading } = useSelector((state: RootState) => state.weatherServiceReducer);
    const dispatch = useDispatch<AppDispatch>();

    // useEffect(() => {
    //     dispatch(getWeatherData(loadFromLocal<Coord>({tag: 'coordinates'})));
    // }, [dispatch]);

    return { weatherServiceData, weatherServiceDataLoading }
}