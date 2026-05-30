import type { ReactNode } from 'react';
import style from './CustomGrid.module.css';

interface CustomGridProps {
    row?: number;
    column?: number;
    children: ReactNode;
}

export function CustomGrid( {children, column = 0, row = 0 }: CustomGridProps ){
    return(
        <div 
            className={style.customGridWrapper}
            style={{
                gridTemplateRows: row ? `repeat(${row}, 1fr)` : 'auto',
                gridTemplateColumns: column ? `repeat(${column}, 1fr)` : 'auto',
            }}>
            {children}
        </div>
    );
}