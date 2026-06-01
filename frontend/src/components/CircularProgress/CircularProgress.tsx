import style from './CircularProgress.module.css';

export function CircularProgress({current = 0, max = 100, invert = false, label = ''}: {current: number, max: number, invert: boolean, label: string}){
    const ratio = Math.min(current / max || 0, 1);
    const circumference = 2 * Math.PI * 40;
    const offset = (ratio) * (circumference / 2);
    const colorRatio = invert ? 1 - ratio : ratio; 
    const color = colorRatio < 0.33 
        ? '#d65749' 
        : colorRatio < 0.66 
        ? '#ffe600' 
        : '#5cb464';
        
    return(
        <div className={style.viewboxWrapper}>
            <svg viewBox='0 0 100 100'>
                <circle className={style.placeholder} cx="50" cy="100" r="40" fill='none' />
                <circle className={style.circlePath} cx="50" cy="100" r="40" fill='none' strokeDasharray={circumference / 2} strokeDashoffset={-offset} stroke={color} />
                <text className={style.value} x='50' y='92' textAnchor='middle' fontSize='16'>{current || 0}</text>
            </svg>
            <div className={style.labelContainer}>
                <div className={style.label}>{label}</div>
            </div>
        </div>
    );
}