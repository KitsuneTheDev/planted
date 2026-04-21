export interface ApiResponse<T> {
    responseData: T | {
        error: string;
    };
    isError: boolean;
}
//# sourceMappingURL=api.type.d.ts.map