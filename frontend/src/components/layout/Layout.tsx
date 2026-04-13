import style from './Layout.module.css';
// import MyPlants from '../../features/plants/MyPlants.tsx';

export default function Layout() {


    return(
        <div className={style.layoutContainer}>
            <header role='banner'>
                <h2>Weather</h2>
                {/* Weather */}
            </header>
            <aside>
                <h2>My Plants</h2>
                {/* <MyPlants /> */}
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