import style from './Weather.module.css';
import { CustomGrid } from '../../components/CustomGrid/CustomGrid';
import { CircularProgress } from '../../components/CircularProgress/CircularProgress';


interface WeatherDetailProps {
    isExpanded: boolean;
}

export function WeatherDetail({ isExpanded }: WeatherDetailProps) {

    return(
        <div className={`${style.weatherDetail} ${isExpanded ? style.expanded : ''}`}>
            <div className={style.collapsible__inner}>
                <CustomGrid column={4}>
                    <CircularProgress current={50} max={200} invert={false} label='quality' />
                    <CircularProgress current={27} max={500} invert={true} label='co level' />
                </CustomGrid>
            </div>
        </div>    
    );
}