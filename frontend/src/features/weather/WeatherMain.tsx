import style from './Weather.module.css';

interface WeatherMainProps {
    temp: number;
}

export function WeatherMain({ temp }: WeatherMainProps) {

    return(
        <div className={style.mainWrapper}>
            <div className={style.value}>
                {Math.round(temp)}
            </div>
            <div className={style.detail}>
                °C
            </div>
        </div>
    );
}