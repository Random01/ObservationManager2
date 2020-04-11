import { DeepSkyTargetType } from './deep-sky-target.model';

/**
 * type definition for uncategorized/miscellaneous targets
 */
export class UnrecognizedDeepSkyTarget extends DeepSkyTargetType {

    constructor(params?: Partial<UnrecognizedDeepSkyTarget>) {
        super(params);
        Object.assign(this, params);
    }

}
