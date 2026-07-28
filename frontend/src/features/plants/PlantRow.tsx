import type { MouseEventHandler, ReactNode } from 'react';
import style from './PlantRow.module.css';
import type { IPlant } from '@planted/types';
import { PlantRowDetail } from './PlantRowDetail';

interface PlantRowProps {
    plant: IPlant;
    isExpanded: boolean;
    onToggle: MouseEventHandler;
}

export function PlantRow({isExpanded, plant, onToggle}: PlantRowProps): ReactNode {

    const name: string = plant.plant_name.slice(0, 1).toUpperCase() + plant.plant_name.slice(1).toLocaleLowerCase();
    const growth: string = plant.growth.slice(0, 1).toUpperCase() + plant.growth.slice(1).toLocaleLowerCase();

    return(
        <div className={`${style.contentWrapper} ${isExpanded ? style.expanded : null}`}>
            <div className={`${style.contentMain}`} onClick={onToggle}>
                <div className={style.contentElement}>{name}</div>
                <div className={style.contentElement}>{growth}</div>
            </div>
            <div className={style.contentDetail}>
                {isExpanded && <PlantRowDetail />}
            </div>
        </div>
    );
}