export interface IAppError {
    success: false,
    status: string;
    statusCode: number;
    isOperational: boolean;
    message?: string;
    errors?: Record<string, string>;
    stack?: string;
}