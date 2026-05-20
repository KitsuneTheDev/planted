import style from './Layout.module.css';
import MyPlants from '../features/plants/MyPlants';
import Dropdown from '../components/Dropdown';

export default function Layout() {

    return(
        <div className={style.layoutContainer}>
            <nav role='navigation'>
                <h2>This Navbar</h2>
                <Dropdown />
            </nav>
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