import { Target } from '../target.model';

/**
 * type definition for a single star
 */
export class StartTarget extends Target {

    // apparent magnitude of star in [mag]
    public apparentMag: number;

    // stellar classification like O,B,A,F,G,K,M
    public classification: number;

}
