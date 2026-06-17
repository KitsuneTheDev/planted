import type { ReactNode } from 'react';
import Card from '../../components/Card/Card';
import style from './WeatherDetail.module.css';

interface WeatherDetailProps {
    label: string;
    value: string;
    icon: ReactNode;
}

export default function WeatherDetail( props: Record<string, WeatherDetailProps>) {

    return(
        <>
            {   
                Object.entries(props).map((prop, index) => {

                    const data: WeatherDetailProps = prop[1];

                    return(
                        <Card key={index}>
                            <div className={style.detailWrapper}>
                                <div className={style.detailHeader}>
                                    <div className={style.headerIcon}>{data.icon}</div>
                                    <div className={style.headerLabel}>{data.label}</div>
                                </div>
                                <div className={style.detailContent}>
                                    <div className={style.contentValue}>{data.value}</div>
                                </div>
                            </div>
                        </Card>
                    )
                })
            }
        </>
    );
}