import style from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return(
        <div className={style.layoutContainer}>
            <h1>DEMO</h1>
            {children}
        </div>
    );
}