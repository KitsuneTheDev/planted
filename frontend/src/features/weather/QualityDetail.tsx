import Card from '../../components/Card/Card';
import style from './QualityDetail.module.css';

interface QualityDetailProps {
    label: string;
    value: number | string;
    unit: string;
}

export default function QualityDetail(props: Record<string, QualityDetailProps>) {
    return(
        <div className={style.contentWrapper}>
            {
                Object.entries(props).map(([key, prop]) => {
                    return(
                        <Card key={key}>
                            <div className={style.contentCardWrapper}>
                                <div className={style.contentCardHead}>
                                    {prop.label}
                                </div>
                                <div className={style.contentCardMain}>
                                    <div className={style.main}>{prop.value}</div>
                                    <div className={style.detail}>{prop.unit}</div>
                                </div>
                            </div>
                        </Card>
                    );
                })
            }
        </div>
    );
}