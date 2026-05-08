import express from 'express';
import { globalErrorHandler } from './controller/errorController.js';
import WeatherRouter from './route/weather.route.js';
import { initDatabase } from './db/config.js';

await initDatabase();

const app  = express();

app.use('/api', WeatherRouter);


// Error Handlers KEEP THEM LAST
app.use(globalErrorHandler);

if(!process.env.PORT) {
    console.log('Cannot land on a PORT!');
    process.exit(1);
} else {
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Server runnin on port: ${PORT}`));
}