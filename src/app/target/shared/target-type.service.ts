import { Observable, of } from 'rxjs';
import { TargetType } from '../../shared/models/target-type.model';
import { TargetTypeItem } from './interfaces/target-search-params.interface';
import { Injectable } from "@angular/core";

@Injectable()
export class TargetTypeService {

    private types = {
        [TargetType.OpenCluster]: 'Open Cluster',
        [TargetType.DarkNebula]: 'Dark Nebula',
        [TargetType.BrightNebula]: 'Bright Nebula',
        [TargetType.Galaxy]: 'Galaxy',
        [TargetType.Star]: 'Star',
        [TargetType.GlobularCluster]: 'Globular Cluster',
        [TargetType.Planet]: 'Planet',
        [TargetType.PlanetaryNebula]: 'Planetary Nebula',
        [TargetType.Comet]: 'Comet',
        [TargetType.DoubleStar]: 'Double Star',
        [TargetType.Asterism]: 'Asterism',
        [TargetType.Quasar]: 'Quasar',
        [TargetType.UnspecifiedDeepSkyObject]: 'Unspecified Deep-Sky Object'
    };

    public getName(type: TargetType): string {
        return this.types[type];
    }

    public getAllTypes(): TargetType[] {
        return [
            TargetType.OpenCluster,
            TargetType.DarkNebula,
            TargetType.BrightNebula,
            TargetType.Galaxy,
            TargetType.Star,
            TargetType.GlobularCluster,
            TargetType.Planet,
            TargetType.PlanetaryNebula,
            TargetType.Comet,
            TargetType.DoubleStar,
            TargetType.Asterism,
            TargetType.Quasar,
            TargetType.UnspecifiedDeepSkyObject
        ];
    }

    public getAllTargetTypes(): Promise<TargetTypeItem[]> {
        return Promise.resolve(
            this
                .getAllTypes()
                .map(type => ({ type: type, name: this.types[type] })));
    }

}
