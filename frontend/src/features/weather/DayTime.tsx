import type { ReactNode } from 'react';
import Card from '../../components/Card/Card';
import style from './DayTime.module.css';

interface DayTimeProps {
    value: string | string;
    icon: ReactNode;
}

export default function DayTime(props: Record<string, DayTimeProps>) {
    return(
        <div className={style.daytimeWrapper}>
            {
                Object.entries(props).map((prop, index) => {
                    return(
                        <Card key={index} dark={true}>
                            <div className={style.daytimeCardWrapper}>
                                <div className={style.daytimeVal}>
                                    {prop[1].value}
                                </div>
                                <div className={style.dayTimeIcon}>
                                    {prop[1].icon}
                                </div>
                            </div>
                        </Card>
                    );
                })
            }
        </div>
    );
}