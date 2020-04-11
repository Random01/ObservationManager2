import { DeepSkyTargetType } from './deep-sky-target.model';

/**
 * type definition for planetary nebulae
 */
export class PlanetaryNebula extends DeepSkyTargetType {

    /**
     * magnitude of central star in [mag]
     */
    public centralStarMagnitude: number;

    constructor(params?: Partial<PlanetaryNebula>) {
        super(params);
        Object.assign(this, params);
    }

}
