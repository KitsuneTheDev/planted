import type { NextFunction, Response, Request } from "express";
import { AppError } from "../error/AppError";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode: number = 500;
    let status: string = "error";
    let isOperational = false;
    let message = 'Something went wrong!';
    const isDev = process.env.NODE_ENV === 'development';

    console.log("--- GLOBAL ERROR ---");
    console.log(`is AppError: `, err instanceof AppError);
    console.log(err.constructor);
    console.log(err.name);
    console.log(err.message);

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