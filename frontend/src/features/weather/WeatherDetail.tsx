import Card from '../../components/Card/Card';
import style from './WeatherDetail.module.css';

interface WeatherDetailProps {
    humidity: string;
    feels: string;
    wind: string;
    aqi: string;
}

export default function WeatherDetail( props: WeatherDetailProps) {

    // const qualityData = weatherServiceData?.quality?.list[0]?.components; 
    return(
        <>
            {   
                Object.entries(props).map((prop, index) => {
                    return(
                        <Card key={index}>
                            <div className={style.detailWrapper}>
                                <div className={style.detailHeader}>
                                    <div className={style.headerIcon}></div>
                                    <div className={style.headerLabel}>{prop[0]}</div>
                                </div>
                                <div className={style.detailContent}>
                                    <div className={style.contentValue}></div>
                                    <div className={style.contentDetail}></div>
                                </div>
                            </div>
                        </Card>
                    )
                })
            }
        </>
    );
}