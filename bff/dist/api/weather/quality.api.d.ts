import type { Coordinates } from "../../type/common.type.js";
import type { CurrentQualityResponse } from '../../type/quality.type.js';
export declare class QualityApi {
    #private;
    constructor();
    getCurrentQuality(coord: Coordinates): Promise<CurrentQualityResponse>;
}
//# sourceMappingURL=quality.api.d.ts.map