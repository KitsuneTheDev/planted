import style from './Layout.module.css';
import Weather from '../features/weather/Weather';
import Card from '../components/Card/Card';

export default function Layout() {

    return(
        <div className={style.layoutContainer}>
            <header role='header'>
                <h1>PlantEd.</h1>
            </header>
            <main role='main-content-display'>
                <div className={style.contentWrapper}>
                    <Card>
                        <Weather />
                    </Card>
                </div>
            </main>
        </div>
    );
}