import { useState } from 'react';
import style from './Layout.module.css';
import MyPlants from '../features/plants/MyPlants';
import Dropdown from '../components/Dropdown';
import Weather from '../features/weather/Weather';

export default function Layout() {

    const [asideHidden, setAsideHidden] = useState<boolean>(true);

    return(
        <div className={style.layoutContainer}>
            <div className={style.toggleContainer}>
                <button onClick={() => setAsideHidden(prev => !prev)}>Plants</button>
            </div>
            <section role='banner' className={style.layoutBannerContainer}>
                <Weather />
                <Dropdown />
            </section>
            <aside className={asideHidden ? style.hidden : ''}>
                <h2>My Plants</h2>
                <MyPlants />
            </aside>
            <main>
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