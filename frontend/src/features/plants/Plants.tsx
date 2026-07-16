import { useEffect } from 'react';
import style from './Plants.module.css';
import { usePlants } from './usePlants';

export default function MyPlants() {
    
    const { plants, error, getPlantsData } = usePlants();

    useEffect(() => {
        getPlantsData();
    }, [])

    console.log(plants);

    return(
        <div className={style.contentWrapper}>
            <div className={style.contentHeader}>
                <h2>Plants</h2>
            </div>
            <div className={style.contentBody}>
                {
                    plants.map((plant, index) => {
                        return(
                            <div key={index}>
                                <div>{plant.plant_name}</div>
                                <div>{plant.growth}</div>
                                <div>{plant.sunlight}</div>
                                <div>{plant.watering}</div>
                                <div>{plant.soil}</div>
                                <div>{plant.fertilization}</div>
                            </div>
                        );
                    })
                }
            </div>
            <div className={style.contentFooter}></div>
        </div>
    );
}