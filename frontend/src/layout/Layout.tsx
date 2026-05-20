import style from './Layout.module.css';
import Dropdown from '../components/Dropdown';

export default function Layout() {

    return(
        <div className={style.layoutContainer}>
            <header role='header'>
                <div className={style.logoContainer}>
                    <h3>P</h3>
                </div>
                <nav className={style.navbar}>
                    <ul>
                        <li>My Plants</li>
                        <li>Browser</li>
                    </ul>
                </nav>
                <div className={style.dropdownContainer}>
                    <Dropdown />
                </div>
            </header>
            <aside role='weather-display'>
                <h2>Weather</h2>
            </aside>
            <main role='main-content-display'>
                <div className={`${style.contentWrapper}`}>
                    <section aria-labelledby='plant-browser' className={`${style.plantBrowser}`}>
                        <h2 id="plant-browser">Browse Plants</h2>
                        {/* <PlantBrowser /> */}
                    </section>
                </div>
            </main>
        </div>
    );
}