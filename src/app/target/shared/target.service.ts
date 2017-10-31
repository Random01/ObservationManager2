import { Injectable } from '@angular/core';

import { Target } from './../../shared/models/target.model';
import { TARGETS } from './mock-targets';

@Injectable()
export class TargetService {

    getTargets(): Promise<Target[]> {
        return Promise.resolve(TARGETS);
    }

}