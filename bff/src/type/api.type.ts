export type ApiResponse<T> =
    | { isError: true; responseData: { error: string } }
    | { isError: false; responseData: T };