import style from './Row.module.css';
import type { ReactNode } from "react";

interface RowProps{
    children: ReactNode;
}

export default function Row({children}: RowProps) {
    return(
        <div className={style.rowWrapper}>
            {children}
        </div>
    );
}