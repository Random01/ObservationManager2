import {Entity} from './entity' 

export class Site extends Entity {
    public name: string;
    public timezone: number = 0;
    public longitude: number;
    public latitude: number;
}  