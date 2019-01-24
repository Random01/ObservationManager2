import { Observable, of } from 'rxjs';
import { TargetType } from '../../shared/models/target-type.model';
import { TargetTypeItem } from './interfaces/target-search-params.interface';

export class TargetTypeService {

    private types = {
        [TargetType.BrightNebula]: 'Bright Nebula',
        [TargetType.Comet]: 'Comet',
        [TargetType.DarkNebula]: 'Dark Nebula',
        [TargetType.Galaxy]: 'Galaxy',
        [TargetType.GlobularCluster]: 'Globular Cluster',
        [TargetType.OpenCluster]: 'Open Cluster',
        [TargetType.Planet]: 'Planet',
        [TargetType.PlanetaryNebula]: 'Planetary Nebula',
        [TargetType.Star]: 'Star'
    };

    public getName(type: TargetType): string {
        return this.types[type];
    }

    public getAllTypes(): TargetType[] {
        return [
            TargetType.BrightNebula,
            TargetType.Comet,
            TargetType.DarkNebula,
            TargetType.Galaxy,
            TargetType.GlobularCluster,
            TargetType.OpenCluster,
            TargetType.Planet,
            TargetType.PlanetaryNebula,
            TargetType.Star
        ];
    }

    public getAllTargetTypes(): Observable<TargetTypeItem[]> {
        return of(this.getAllTypes().map(type => ({ type: type, name: this.types[type] })));
    }

}
