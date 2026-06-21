import style from './Card.module.css';
import type { ReactNode } from "react";

interface CardProps{
    dark?: boolean;
    children: ReactNode;
}

export default function Card({children, dark = false}: CardProps) {

    const cardStyle = {
        backgroundColor: dark ? 'var(--color-theme-background-2)': '',
    }

    return(
        <div className={style.cardWrapper} style={cardStyle}>
            {children}
        </div>
    );
}