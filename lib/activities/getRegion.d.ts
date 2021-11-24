export interface IRegion {
    title: string;
    code: string;
    county: string;
    toString: () => string;
}
export declare class Region implements IRegion {
    title: string;
    code: string;
    county: string;
    constructor(obj: any);
    toString(): string;
}
export declare function getRegion(number: string): Promise<Region>;
//# sourceMappingURL=getRegion.d.ts.map