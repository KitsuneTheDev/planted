import type { NextFunction, RequestHandler, Request, Response } from "express";

export const asyncWrapper = (middleware: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(middleware(req, res, next)).catch(next);
    }
}