import style from './Weather.module.css';

interface QualityMainProps {
    aqi: number;
    aqiDetail: string | undefined;
} 

export default function QualityMain({aqi, aqiDetail}: QualityMainProps){
    return(
        <>
            <div className={style.aqiMap}></div>
            <div className={style.aqiMain}>
                <div className={style.mainContext}>
                    {aqi}
                </div>
                <div className={style.mainDetail}>
                    {aqiDetail}
                </div>
            </div>
        </>
    );
}