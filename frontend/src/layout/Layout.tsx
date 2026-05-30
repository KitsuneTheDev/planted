import style from './Layout.module.css';
import Dropdown from '../components/Dropdown';
import Weather from '../features/weather/Weather';

export default function Layout() {

    return(
        <div className={style.layoutContainer}>
            <header role='header'>
                <div className={style.logoContainer}>
                    <h1>PlantEd.</h1>
                </div>
                <nav className={style.navbar}>
                    <ul>
                        <li>MyPlants</li>
                        <li>Browser</li>
                    </ul>
                </nav>
                <div className={style.dropdownContainer}>
                    <Dropdown />
                </div>
            </header>
            <aside role='weather-display'>
                <Weather />
            </aside>
            <main role='main-content-display'>
                <div className={`${style.contentWrapper}`}>
                    <section aria-labelledby='plant-browser' className={`${style.plantBrowser}`}>
                        <h2 id="plant-browser">Browse Plants</h2>                    </section>
                </div>
            </main>
        </div>
    );
}