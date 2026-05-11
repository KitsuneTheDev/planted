import express from "express";
import { asyncWrapper } from "../util/asyncWrapper";
import { searchByQuery } from "../controller/cityQuery.controller";

const router = express.Router();

router.get('/search', asyncWrapper(searchByQuery));

export default router;