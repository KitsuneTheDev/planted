export interface CurrentQualityResponse {
    coord: number[];
    list: List[];
}
export interface List {
    dt: number;
    main: Main;
    components: {
        [key: string]: number;
    };
}
export interface Main {
    aqi: number;
}
//# sourceMappingURL=quality.type.d.ts.map