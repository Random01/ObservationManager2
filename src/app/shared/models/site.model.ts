import {Entity} from './entity.model' 

export class Site extends Entity {
    public name: string;
    public timezone: number = 0;
    public longitude: number;
    public latitude: number;

    constructor(params: { id: string, timezone: number, longitude: number, latitude: number }) {
        super(params);
    }
}  