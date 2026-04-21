import type { ApiResponse } from "../type/api.type.js";
export declare class ApiClient {
    #private;
    constructor(baseUrl: string);
    get<T>(endpoint: string): Promise<ApiResponse<T>>;
}
//# sourceMappingURL=ApiClient.d.ts.map