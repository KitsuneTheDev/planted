import { useState, useMemo } from 'react';
import { useGetAllPlantsDataQuery } from '../../redux/reduxApis/plantApi';
import type { IPlant } from '@planted/types';

export function usePlants() {

    const [page, setPage] = useState<number>(1);

    const {
        data: response,
        error,
        isLoading,
        isFetching
    } = useGetAllPlantsDataQuery(page);

    const isMore: boolean = (response?.length ?? 0) > 20;
    const isFirstPage: boolean = page < 2;

    const plants: Array<IPlant> = useMemo(() => {
        if(!response) return [];
        return isMore ? response.slice(0, 20) : response;
    }, [response, isMore]);

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

    return { 
        plants, 
        error: error ? `Error occured: ${JSON.stringify(error)}` : null, 
        isLoading,
        isFetching,
        isMore,
        isFirstPage,
        handleNextClick,
        handleBackClick 
    };
}