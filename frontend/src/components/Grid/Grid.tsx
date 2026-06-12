import style from './Grid.module.css';
import type { ReactNode } from "react";

interface GridProps{
    children: ReactNode;
    row?: number;
    column?: number;
}

export default function Grid4({children, row = 0, column = 0}: GridProps) {
    return(
        <div className={style.gridWrapper} style={{gridTemplateRows: `repeat(${row}, 1fr)`, gridTemplateColumns: `repeat(${column}, 1fr)`}}>
            {children}
        </div>
    );
}