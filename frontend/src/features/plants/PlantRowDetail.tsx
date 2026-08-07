import style from './PlantRowDetail.module.css';
import { usePlants } from './usePlants';

export function PlantRowDetail(): React.ReactNode {

    const { climatologyData } = usePlants();

    console.log(climatologyData);

    return(
        <div className={style.contentWrapper}>
            <h1>PLANT ROW DETAIL</h1>
        </div>
    )
}