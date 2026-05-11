import type { NextFunction, Request, Response } from "express";
import { findCities } from "../service/cityQuery.service";

export async function searchByQuery(req: Request, res: Response, next: NextFunction) {
    const query: string = String(req.query?.city ?? '');

    if(!query || query.length < 2) {
        res.status(200).json([]);
        return;
    }

    const searchResults = await findCities(String(query));

    res.status(200).json(searchResults);
}