import express from 'express';
import WeatherRouter from './route/weather.route.js';
const app = express();
app.use('/api', WeatherRouter);
if (!process.env.PORT) {
    console.log('Cannot land on a PORT!');
    process.exit(1);
}
else {
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Server runnin on port: ${PORT}`));
}
//# sourceMappingURL=app.js.map