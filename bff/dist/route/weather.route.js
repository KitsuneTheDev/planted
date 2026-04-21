import express from "express";
import { getCurrentWeatherData } from "../controller/weather.controller.js";
const router = express.Router();
router.get('/weather/:lat/:lon', getCurrentWeatherData);
export default router;
//# sourceMappingURL=weather.route.js.map