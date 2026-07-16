import style from './Layout.module.css';
import Weather from '../features/weather/Weather';
import Plants from '../features/plants/Plants';
import Card from '../components/Card/Card';
import Dropdown from '../components/Dropdown/Dropdown';
import Row from '../components/Row/Row';

export default function Layout() {

    return(
        <div className={style.layoutContainer}>
            <header role='header'>
                <h1>PlantEd.</h1>
            </header>
            <main role='main-content-display'>
                <div className={style.contentWrapper}>
                    <Card>
                        <Row>
                            <Dropdown />
                        </Row>
                        <Weather />
                    </Card>
                    <Card>
                        <Plants />
                    </Card>
                </div>
            </main>
        </div>
    );
}