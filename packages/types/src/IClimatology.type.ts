export type Month = 
    | 'JAN' | 'FEB' | 'MAR' | 'APR' | 'MAY' | 'JUN'
    | 'JUL' | 'AUG' | 'SEP' | 'OCT' | 'NOV' | 'DEC'
    | 'ANN';

export interface INasaResponse {
    "type": string;
    "geometry": {
        "type": string;
        "coordinates": string;
    };
    "properties": {
        "parameter": IClimatologyResponse;
    };
    "header"?: any;
}

export interface IClimatologyResponse {
    "ALLSKY_SFC_PAR_TOT": Record<Month, number>;
    "ALLSKY_SFC_UV_INDEX_MAX": Record<Month, number>;
    "DAY_HOURS": Record<Month, number>;
    "FROST_DAYS": Record<Month, number>;
    "GWETROOT": Record<Month, number>;
    "MAX_EQUIV_NO_SUN_DAYS": Record<Month, number>;
    "RH2M": Record<Month, number>;
    "T2M_MAX": Record<Month, number>;
    "T2M_MIN": Record<Month, number>;
    "TSOIL1": Record<Month, number>;
}