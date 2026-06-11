import style from './Card.module.css';
import type { ReactNode } from "react";

interface CardProps{
    children: ReactNode;
}

export default function Card({children}: CardProps) {
    return(
        <div className={style.cardWrapper}>
            {children}
        </div>
    );
}