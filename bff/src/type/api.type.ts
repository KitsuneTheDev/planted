export interface ApiResponse<T> {
    responseData: T,
    isError: boolean,
}