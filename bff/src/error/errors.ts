import { AppError } from "./AppError";

export class NotFoundError extends AppError {
    
}

export class ValidationError extends AppError {

}

export class ConflictError extends AppError {

}

export class AuthenticationError extends AppError {

}

export class BadRequestError extends AppError {
    constructor(message: string) {
        super(message, 400);
    }
}