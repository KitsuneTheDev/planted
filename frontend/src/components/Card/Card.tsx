import style from './Card.module.css';
import type { ReactNode } from "react";

interface CardProps{
    children: ReactNode;
    size: number;
}

export default function Card({children, size}: CardProps) {
    return(
        <div className={style.cardWrapper} style={{gridColumn: `span ${size}`}}>
            {children}
        </div>
    );
}