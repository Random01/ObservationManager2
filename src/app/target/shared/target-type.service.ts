import { Observable ,  of } from 'rxjs';
import { TargetType } from '../../shared/models/target-type.model';

export class TargetTypeService {

    public getAllTargetTypes(): Observable<TargetType[]> {
        return of([
            TargetType.BrightNebula,
            TargetType.Comet
        ]);
    }

}
