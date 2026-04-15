export interface ApiResponse<T> {
    responseData: T | {error: string},
    isError: boolean,
}