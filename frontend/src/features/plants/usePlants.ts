import { useState, useMemo } from 'react';
import type { IPlant } from '@planted/types';
import type { AppDispatch } from '../../redux/store';
import { debounceWrapper } from '../../utils/debounceWrapper';
import { getAllPlantsData } from '../../redux/slices/plantServiceSlice';
import { useDispatch } from 'react-redux';

export function usePlants() {
    const [plants, setPlants] = useState<Array<IPlant>>([]);
    const [error, setError] = useState<string | null>(null);

    const dispatch = useDispatch<AppDispatch>();

    const getPlantsData = useMemo(
        () => debounceWrapper(async (page: number = 0) => {
            try {
                const response = await dispatch(getAllPlantsData(page)).unwrap();

                setPlants(prev => [...prev, ...response]);
                setError(null);
            } catch(error) {
                const errorMessage = `Error occured: ${error}`;
                setError(errorMessage);
                setPlants([]);
            }
        }, 500), [dispatch]
    )

    return { plants, error, getPlantsData }
}