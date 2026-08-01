import expres from "express";
import { getClimatologyData } from "../controller/climatology.controller";
import { asyncWrapper } from "../util/asyncWrapper";

const router = expres.Router();

router.get('/climatology', asyncWrapper(getClimatologyData));

export default router;