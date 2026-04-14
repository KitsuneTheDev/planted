import express from 'express';
import { ApiClient } from './api/ApiClient.js';
const app = express();
if (!process.env) {
    console.log('Cannot land on a PORT!');
    process.exit(1);
}
else {
    console.log(process.env.PORT);
    const PORT = process.env.PORT;
    const api = new ApiClient(`https://api.openweathermap.org/data/2.5/`);
    const data = await api.get(`weather?lat=44.34&lon=10.99`);
    app.listen(PORT, () => console.log(`Server runnin on port: ${PORT} ${data}`));
}
//# sourceMappingURL=app.js.map