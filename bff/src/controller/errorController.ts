import type { NextFunction, Response, Request } from "express";
import { AppError } from "../util/AppError";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode: number = 500;
    let status: string = "error";
    let isOperational = false;
    let message = 'Something went wrong!';
    const isDev = process.env.NODE_ENV === 'development';

    if(err instanceof AppError) {
        statusCode = err.statusCode;
        status = err.status;
        message = err.message;
        isOperational = true;
    }

    const response: any = {
        success: false,
        status,
        message,
    }

    if(isDev) {
        response.stack = err.stack;
        response.errors = err.errors;
    }

    res.status(statusCode).json(response);
}