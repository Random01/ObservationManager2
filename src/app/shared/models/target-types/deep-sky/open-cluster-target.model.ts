import { DeepSkyTargetType } from './deep-sky-target.model';

/**
 * type definition for open clusters
 */
export class OpenClusterTarget extends DeepSkyTargetType {

    /**
     * number of stars
     */
    public numberOfStars: number;

    /**
     * magnitude of brightest star in [mag]
     */
    public brightestStar: number;

    /**
     * classification according to Trumpler
     */
    public trumplerClass: string;

    constructor(params?: Partial<OpenClusterTarget>) {
        super(params);
        Object.assign(this, params);
    }

}
