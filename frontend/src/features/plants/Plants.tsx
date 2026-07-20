import { useEffect } from 'react';
import style from './Plants.module.css';
import { usePlants } from './usePlants';
import { PlantRow } from './PlantRow';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

export default function MyPlants() {
    
    const { plants, error, getPlantsData, isMore, isFirstPage, handleNextClick, handleBackClick } = usePlants();

    return(
        <div className={style.contentWrapper}>
            <div className={style.contentBody}>
                <div className={style.bodyDetail}>
                    <div className={style.detailContent}>Plant</div>
                    <div className={style.detailContent}>Growth</div>
                </div>
                <div className={style.bodyMain}>
                    {
                        plants.map((plant) => {
                            return(
                                <PlantRow
                                    key={plant.id}
                                    id={plant.id}
                                    plant_name={plant.plant_name}
                                    growth={plant.growth}
                                    sunlight={plant.sunlight}
                                    soil={plant.soil}
                                    watering={plant.watering}
                                    fertilization={plant.fertilization} />
                            );
                        })
                    }
                </div>
            </div>
            <div className={style.contentFooter}>
                <div className={`${style.arrowContainer} ${isFirstPage ? style.disabled : style.enabled}`}>
                    <ArrowBigLeft className={`${style.arrow} ${isFirstPage ? style.disabled : style.enabled}`} onClick={handleBackClick} />
                </div>
                <div className={`${style.arrowContainer} ${isMore ? style.enabled : style.disabled}`}>
                    <ArrowBigRight className={`${style.arrow} ${isMore ? style.enabled : style.disabled}`}  onClick={handleNextClick}/>
                </div>
            </div>
        </div>
    );
}