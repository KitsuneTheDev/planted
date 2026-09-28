// import { useState, useMemo } from 'react';
// import { useGetAllPlantsDataQuery } from '../../redux/reduxApis/plantApi';
// import type { IPlant } from '@planted/types';
// import { useGetClimatologyDataQuery } from '../../redux/reduxApis/climatologyApi';

// export function usePlants() {

//     const [page, setPage] = useState<number>(1);

//     const {
//         data: plantData,
//         error: plantError,
//         isLoading: plantLoading,
//         isFetching: plantFetching,
//     } = useGetAllPlantsDataQuery(page);

//     const {
//         data: climatologyData,
//         error: climatologyError,
//         isLoading: climatologyLoading,
//         isFetching: climatologyFetching,
//     } = useGetClimatologyDataQuery();


//     const isMore: boolean = (plantData?.length ?? 0) > 20;
//     const isFirstPage: boolean = page < 2;

//     const plants: Array<IPlant> = useMemo(() => {
//         if(!plantData) return [];
//         return isMore ? plantData.slice(0, 20) : plantData;
//     }, [plantData, isMore]);

//     const handleNextClick = () => {
//         if(!isMore) return;
//         else {
//             setPage(prev => prev + 1);
//         }
//     }

//     const handleBackClick = () => {
//         if(isFirstPage) return;
//         else{
//             setPage(prev => prev - 1);
//         }
//     }

//     return { 
//         plants, 
//         plantError: plantError ? `Error occured: ${JSON.stringify(plantError)}` : null, 
//         plantLoading,
//         plantFetching,
//         isMore,
//         isFirstPage,
//         handleNextClick,
//         handleBackClick,
//         climatologyData,
//         climatologyError: climatologyError ? `Error occured: ${JSON.stringify(climatologyError)}` : null,
//         climatologyLoading,
//         climatologyFetching, 
//     };
// }