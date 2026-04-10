import style from './Layout.module.css';

export default function Layout() {
    return(
        <div className={style.layoutContainer}>
            <header role='banner'>
                <h2>Weather</h2>
            </header>
            <main>
                <div className={style.contentWrapper}>
                    <section aria-labelledby='my-plants' className={style.myPlants}>
                        <h2 id="my-plants">My Plants</h2>
                        {/* <MyPlants /> */}
                    </section>
                    <section aria-labelledby='plant-browser' className={style.plantBrowser}>
                        <h2 id="plant-browser">Browse Plants</h2>
                        {/* <PlantBrowser /> */}
                    </section>
                </div>
            </main>
        </div>
    );
}