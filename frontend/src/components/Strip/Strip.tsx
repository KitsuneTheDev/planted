import type { ReactNode } from 'react';
import style from './Strip.module.css';

interface StripProps{
    children: ReactNode;
}

export default function Strip({ children }: StripProps) {

    return(
        <div className={style.contentWrapper}>
            { children }
        </div>
    );
}