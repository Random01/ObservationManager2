import {Entity} from './entity.model' 

export class Site extends Entity {

    public name: string;
    // <!-- offset from UT in [min] not including daylight savings time -->
	// <!--PLEASE NOTE: West of Greenwich is negative and east is positive -- >
    public timezone: number = 0;
    // <!-- geographical longitude; eastwards positive -->
    public longitude: number;
    // <!-- geographical latitude -->
    public latitude: number;
    // <!-- elevation in meters -->
    public elevation: number;
    // <!--IAU Code for site -- >
    public code: number;

    constructor(params: {
        id: string,
        timezone: number,
        longitude: number,
        latitude: number,
        elevation: number,
        code: number
    }) {
        super(params);
        Object.assign(this, params);
    }
}  