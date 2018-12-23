import { Observable } from 'rxjs/Observable';
import { TargetType } from '../../shared/models/target-type.model';
import { of } from 'rxjs/observable/of';

export class TargetTypeService {

    public getAllTargetTypes(): Observable<TargetType[]> {
        return of([
            TargetType.BrightNebula,
            TargetType.Comet
        ]);
    }

}
