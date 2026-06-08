import style from './Weather.module.css';

interface WeatherDetailProps {
    humidity: string;
    feels: string;
    wind: string;
    aqi: string;
}

export function WeatherDetail( props: WeatherDetailProps) {

    // const qualityData = weatherServiceData?.quality?.list[0]?.components;
    console.log(props);
    const propLength: number = Object.keys(props).length || 0; 
    return(
        <div className={style.detailWrapper}>
            {   
                Object.entries(props).map((prop, index) => {
                    const isLast = propLength === index ? true : false;
                    return(
                        <div key={index} className={`${style.mapWrapper} ${isLast ?? style.last}`}>
                            <div className={style.head}>
                                <div className={style.label}>
                                    {`${prop[0][0]?.toUpperCase()}${prop[0].slice(1)}`}
                                </div>
                            </div>
                            <div className={style.main}>
                                <div className={style.value}>{(prop[1])}</div>
                                <div className={style.detail}></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}