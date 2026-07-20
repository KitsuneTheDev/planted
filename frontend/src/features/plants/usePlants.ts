import { useState, useMemo, useEffect, useCallback } from 'react';
import type { IPlant } from '@planted/types';
import type { AppDispatch } from '../../redux/store';
import { debounceWrapper } from '../../utils/debounceWrapper';
import { getAllPlantsData } from '../../redux/slices/plantServiceSlice';
import { useDispatch } from 'react-redux';

export function usePlants() {
    const [plants, setPlants] = useState<Array<IPlant>>([]);
    const [error, setError] = useState<string | null>(null);
    const [isMore, setIsMore] = useState<boolean>(false);
    const [isFirstPage, setIsFirstPage] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    const dispatch = useDispatch<AppDispatch>();

    const handleNextClick = () => {
        if(!isMore) return;
        else {
            setPage(prev => prev + 1);
        }
    }

    const handleBackClick = () => {
        if(isFirstPage) return;
        else{
            setPage(prev => prev - 1);
        }
    }

    const getPlantsData = useCallback(async (currentPage: number) => {
            try {
                const response = await dispatch(getAllPlantsData(currentPage)).unwrap();

                setIsFirstPage(currentPage < 2);
                if(isMore) {
                    setPlants(response.slice(0, 20));
                } else {
                    setPlants(response);
                }
                setIsMore(() => response.length > 20);
                setError(null);
            } catch(error) {
                const errorMessage = `Error occured: ${error}`;
                setError(errorMessage);
                setPlants([]);
            }
            console.log(isFirstPage, isMore);
    }, [dispatch, isFirstPage, isMore]);

    useEffect(() => {
        getPlantsData(page);
    }, [page, getPlantsData])

    return { plants, error, getPlantsData, isMore, isFirstPage, handleNextClick, handleBackClick }
}