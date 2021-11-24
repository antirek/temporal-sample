import axios from 'axios';

export interface IRegion {
    title: string,
    code: string,
    county: string,
    toString: () => string,
}

export class Region implements IRegion {
    title: string;
    code: string;
    county: string;

    constructor(obj: any){
        this.title = obj.title;
        this.code = obj.code;
        this.county = obj.county;
    }

    toString() {
        return JSON.stringify(this);
    }
}

export async function getRegion(number: string): Promise<Region> {
    const request =  await axios.get(`https://number.services.mobilon.ru/number/${number}`) as any;
    const data = request.data;
    return new Region({
        title: data.region.title,
        code: data.region.code,
        county: data.region.county,
    });
}