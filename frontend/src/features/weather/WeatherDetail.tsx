import style from './Weather.module.css';
import { CustomGrid } from '../../components/CustomGrid/CustomGrid';
import { CircularProgress } from '../../components/CircularProgress/CircularProgress';
import type { WeatherCombined } from '@planted/types';


interface WeatherDetailProps {
    isExpanded: boolean;
    weatherServiceData: WeatherCombined | null;
}

export function WeatherDetail({ isExpanded, weatherServiceData }: WeatherDetailProps) {

    const qualityData = weatherServiceData?.quality?.list[0]?.components;

    return(
        <div className={`${style.weatherDetail} ${isExpanded ? style.expanded : ''}`}>
            <div className={style.collapsible__inner}>
                <CustomGrid column={4}>
                    <CircularProgress current={Math.round(Number(qualityData?.co))} max={700} invert={true} label='Carbon Monoxide' />
                    <CircularProgress current={Math.round(Number(qualityData?.nh3))} max={10} invert={true} label='Ammonia' />
                    <CircularProgress current={Math.round(Number(qualityData?.no))} max={10} invert={true} label='Nitrogen Monoxide' />
                    <CircularProgress current={Math.round(Number(qualityData?.no2))} max={10} invert={true} label='Nitrogen Dioxide' />
                    <CircularProgress current={Math.round(Number(qualityData?.o3))} max={60} invert={true} label='Ozone' />
                    <CircularProgress current={Math.round(Number(qualityData?.pm2_5))} max={5} invert={true} label='Fine Particles' />
                    <CircularProgress current={Math.round(Number(qualityData?.pm10))} max={15} invert={true} label='Coarse Particles' />
                    <CircularProgress current={Math.round(Number(qualityData?.so2))} max={15} invert={true} label='Sulphur Dioxide' />
                </CustomGrid>
            </div>
        </div>    
    );
}