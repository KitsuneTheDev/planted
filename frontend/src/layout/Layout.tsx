import style from './Layout.module.css';
import MyPlants from '../myplants/MyPlants.tsx';
import { useState } from 'react';

export default function Layout() {

    const [isMyplantsOpen, setIsMyplantsOpen] = useState(false);

    return(
        <div className={style.layoutContainer}>
            <header role='banner'>
                <h2>Weather</h2>
            </header>
            <main>
                <div className={`${style.contentWrapper} ${isMyplantsOpen ? style.divided : ''}`}>
                    <h2 id="my-plants"
                        className={style.toggleMyplants}
                        onClick={() => setIsMyplantsOpen((prev) => !prev)}>My Plants</h2>
                    <section aria-labelledby='my-plants' className={`${style.myPlants} ${!isMyplantsOpen ? style.hidden : ''}`}>
                        {isMyplantsOpen ? <MyPlants /> : null}
                    </section>
                    <section aria-labelledby='plant-browser' className={`${style.plantBrowser}`}>
                        <h2 id="plant-browser">Browse Plants</h2>
                        {/* <PlantBrowser /> */}
                    </section>
                </div>
            </main>
        </div>
    );
}