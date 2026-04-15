import express from 'express';
import { ApiClient } from './api/ApiClient.js';
import { getCurrentWeatherData } from './controller/weather.controller.js';

const app  = express();

const router = express.Router();

router.get('', getCurrentWeatherData);

app.use('/api', router);

if(!process.env.PORT) {
    console.log('Cannot land on a PORT!');
    process.exit(1);
} else {
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Server runnin on port: ${PORT}`));
}