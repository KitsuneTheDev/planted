// import type { NextFunction, Request, Response } from "express";
// import { findAllPlants } from "../service/plant.service";

// export async function fetchAllPlants(req: Request, res: Response, next: NextFunction) {
//     let page: number = Number.parseInt(String(req.query?.page) ?? 1);

//     if(isNaN(page) || !page) {
//         page = 1
//     }

//     const results = await findAllPlants(page);

//     if(!results) {
//         res.status(200).json([]);
//         return;
//     }

//     res.status(200).json(results);
// }