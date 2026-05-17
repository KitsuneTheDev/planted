import style from './MiniCard.module.css';

export interface MiniCardInterface {
    icon?: string | undefined;
    header: string | undefined;
    value: string | number | undefined;
    detail: string | number | undefined;

}

export default function MiniCard(values: MiniCardInterface) {
    return(
        <div className={style.miniCardContainer}>
            <div className={style.iconContainer}>
                {values?.icon}
            </div>
            <div className={style.contentWrapper}>
                <div className={style.contentHeader}>
                    <h3>{values.header}</h3>
                </div>
                <div className={style.contentBody}>
                    <div className={style.contentBodyValue}>
                        {values.value}
                    </div>
                    <div className={style.contentBodyDetail}>
                        {values.detail}
                    </div>
                </div>
            </div>
        </div>
    );
}