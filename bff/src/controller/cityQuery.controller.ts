import type { NextFunction, Request, Response } from "express";
import { findCities } from "../service/cityQuery.service";

export async function searchByQuery(req: Request, res: Response, next: NextFunction) {
    const query: string = String(req.query?.city ?? '');
    let page: number = Number.parseInt(String(req.query?.page) ?? 1);

    if(isNaN(page) || !page) {
        page = 1;
    }

    if(!query || query.length < 2) {
        res.status(200).json([]);
        return;
    }

    const searchResults = await findCities(query, page);

    res.status(200).json(searchResults);
}