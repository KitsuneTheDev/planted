import React, { useState, useMemo, useEffect } from "react";
import type { DropdownData } from "@planted/types";
import { debounceWrapper } from "../../utils/debounceWrapper";
import { DropdownService } from "../../services/DropdownService";
import { getWeatherData } from "../../redux/slices/weatherServiceSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import type { Coord } from "@planted/types/src/weather.type";
import { loadFromLocal, saveToLocal } from "../../utils/localStorage";

export function useDropdown() {
    
    const [dropdownData, setDropdownData] = useState<DropdownData[]>([]);
    const dispatch = useDispatch<AppDispatch>();

    const search = useMemo(
        () => debounceWrapper(async (query: string) => {
            if(query.length < 2) {
                setDropdownData([]);
                return;
            } else {
                const response = await DropdownService.getDropdownData(query);
                if(!response.isError) {
                    const data = response.responseData;
                    setDropdownData(data.length === 0 ? [] : data);
                    return;
                }
            }
        }, 500), []);

    const handleDropdownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        search(e.target.value);
    }

    const handleOptionClick = ({lat, lon}: Coord) => {
        saveToLocal<Coord>({item: {lat, lon}, tag: 'coordinates'});
        dispatch(getWeatherData({lat, lon}));
        setDropdownData([]);
    }

    useEffect(() => {
        const savedCoord = loadFromLocal<Coord>({tag: 'coordinates'});
        if(!savedCoord) return;
        dispatch(getWeatherData(savedCoord));
    }, [])

    return { dropdownData, handleDropdownChange, handleOptionClick }
}