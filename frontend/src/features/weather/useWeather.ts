import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

export function useWeather() {
    const { weatherServiceData, weatherServiceDataLoading } = useSelector((state: RootState) => state.weatherServiceReducer);

    return { weatherServiceData, weatherServiceDataLoading }
}