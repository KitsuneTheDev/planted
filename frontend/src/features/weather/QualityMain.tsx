import style from './QualityMain.module.css';

interface QualityMainProps {
    aqi: number;
    aqiDetail: string | undefined;
} 

export default function QualityMain({aqi, aqiDetail}: QualityMainProps){

    const markerPosition = 1 + ((aqi - 1) * 8) + ((aqi - 1) * 2) + 4;

    return(
        <div className={style.contextWrapper}>
            <div className={style.headerWrapper}>
                <div className={style.header}>Air Quality</div>
            </div>
            <div className={style.mainWrapper}>
                <div className={style.aqiMap}>
                    <svg viewBox='0 0 50 5' preserveAspectRatio='none'>
                        <line x1="1" y1="3" x2="9" y2="3"  stroke="black" strokeWidth="10" strokeLinecap='round' />
                        <line x1="1" y1="3" x2="9" y2="3"  stroke="#42ff58" strokeWidth="5" strokeLinecap='round' />
                        <line x1="11" y1="3" x2="19" y2="3"  stroke="black" strokeWidth="10" strokeLinecap='round' />
                        <line x1="11" y1="3" x2="19" y2="3"  stroke="#ffdc42" strokeWidth="5" strokeLinecap='round' />
                        <line x1="21" y1="3" x2="29" y2="3"  stroke="black" strokeWidth="10" strokeLinecap='round' />
                        <line x1="21" y1="3" x2="29" y2="3"  stroke="#ff8e42" strokeWidth="5" strokeLinecap='round' />
                        <line x1="31" y1="3" x2="39" y2="3"  stroke="black" strokeWidth="10" strokeLinecap='round' />
                        <line x1="31" y1="3" x2="39" y2="3"  stroke="#ff5842" strokeWidth="5" strokeLinecap='round' />
                        <line x1="41" y1="3" x2="49" y2="3"  stroke="black" strokeWidth="10" strokeLinecap='round' />
                        <line x1="41" y1="3" x2="49" y2="3"  stroke="#521515" strokeWidth="5" strokeLinecap='round' />
                        <line x1={markerPosition} y1="3" x2={markerPosition} y2="3"  stroke="black" strokeWidth="15" strokeLinecap='round' />
                        <line x1={markerPosition} y1="3" x2={markerPosition} y2="3"  stroke="white" strokeWidth="10" strokeLinecap='round' />
                    </svg>
                </div>
                <div className={style.aqiMain}>
                    <div className={style.mainContext}>
                        {aqi}
                    </div>
                    <div className={style.mainDetail}>
                        {aqiDetail}
                    </div>
                </div>
            </div>
        </div>
    );
}