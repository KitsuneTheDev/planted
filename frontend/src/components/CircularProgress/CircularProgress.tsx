import style from './CircularProgress.module.css';

export function CircularProgress(props: {current: number, max: number, invert: boolean, label: string}){
    const ratio = props.current / props.max;
    const circumference = 2 * Math.PI * 40;
    const offset = (ratio * (circumference / 2));
    const colorRatio = props.invert ? 1 - ratio : ratio; 
    const color = colorRatio === 0 
        ? 'none' 
        : colorRatio < 0.33 
        ? '#C0392B' 
        : colorRatio < 0.66 
        ? '#E6A817' 
        : '#2D8342';
        
    return(
        <div className={style.viewboxWrapper}>
            <svg viewBox='0 0 100 100'>
                <circle className={style.placeholder} cx="50" cy="100" r="40" fill='none' />
                <circle className={style.circlePath} cx="50" cy="100" r="40" fill='none' strokeDasharray={circumference / 2} strokeDashoffset={-offset} stroke={color} />
            </svg>
            <div className={style.labelContainer}>
                <div className={style.value}>{props.current}</div>
                <div className={style.label}>{props.label}</div>
            </div>
        </div>
    );
}