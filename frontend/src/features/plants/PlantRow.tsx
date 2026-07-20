import type { ReactNode } from 'react';
import style from './PlantRow.module.css';
import type { IPlant } from '@planted/types';

export function PlantRow(props: IPlant): ReactNode {

    const name: string = props.plant_name.slice(0, 1).toUpperCase() + props.plant_name.slice(1).toLocaleLowerCase();
    const growth: string = props.growth.slice(0, 1).toUpperCase() + props.growth.slice(1).toLocaleLowerCase();

    return(
        <div className={style.contentWrapper}>
            <div className={style.contentElement}>{name}</div>
            <div className={style.contentElement}>{growth}</div>
        </div>
    );
}