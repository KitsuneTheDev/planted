import { useState } from 'react';
import style from './Layout.module.css';
import MyPlants from '../features/plants/MyPlants';

export default function Layout() {

    const [asideHidden, setAsideHidden] = useState<boolean>(true);

    return(
        <div className={style.layoutContainer}>
            <div className={style.toggleContainer}>
                <button onClick={() => setAsideHidden(prev => !prev)}>Plants</button>
            </div>
            <header role='banner'>
                <h2>Weather</h2>
                {/* Weather */}
            </header>
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