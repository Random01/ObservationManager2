import { DeepSkyTargetType } from './deep-sky-target.model';

/**
 * type definition for quasars
 */
export class QuasarTarget extends DeepSkyTargetType {

    constructor(params?: Partial<QuasarTarget>) {
        super(params);
        Object.assign(this, params);
    }

}
