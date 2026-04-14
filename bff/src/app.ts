import express from 'express';
import { ApiClient } from './api/ApiClient.js';
import type { WeatherSnapshot } from './type/weather.type.js';
import type { ApiResponse } from './type/api.type.js';

const app  = express();

if(!process.env) {
    console.log('Cannot land on a PORT!');
    process.exit(1);
} else {
    const PORT = process.env.PORT;
    const api = new ApiClient(`https://api.openweathermap.org/data/2.5/`);
    const data: WeatherSnapshot = await api.get(`weather?lat=44.34&lon=10.99`);
    app.listen(PORT, () => console.log(`Server runnin on port: ${PORT} ${data.weather} HELLO`));
}