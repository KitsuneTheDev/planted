import style from './Layout.module.css';
import Weather from '../features/weather/Weather';
import Strip from '../components/Strip/Strip';

export default function Layout() {

    return(
        <div className={style.layoutContainer}>
            <header role='header'>
                <h1>PlantEd.</h1>
                <Strip>
                    <Weather />
                </Strip>
            </header>
            <main role='main-content-display'>
                <div className={style.contentWrapper}>
                </div>
            </main>
        </div>
    );
}