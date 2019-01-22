import { Observable, of } from 'rxjs';
import { TargetType } from '../../shared/models/target-type.model';
import { TargetTypeItem } from './interfaces/target-search-params.interface';

export class TargetTypeService {

    public getAllTargetTypes(): Observable<TargetTypeItem[]> {
        return of([
            {
                type: TargetType.BrightNebula,
                name: 'Bright Nebula'
            },
            {
                type: TargetType.Comet,
                name: 'Comet'
            },
            {
                type: TargetType.DarkNebula,
                name: 'Dark Nebula'
            },
            {
                type: TargetType.Galaxy,
                name: 'Galaxy'
            },
            {
                type: TargetType.GlobularCluster,
                name: 'Globular Cluster'
            },
            {
                type: TargetType.OpenCluster,
                name: 'Open Cluster'
            },
            {
                type: TargetType.Planet,
                name: 'Planet'
            },
            {
                type: TargetType.PlanetaryNebula,
                name: 'Planetary Nebula'
            },
            {
                type: TargetType.Star,
                name: 'Star'
            }
        ]);
    }

}
