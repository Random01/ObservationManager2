import {
  Scope,
  Eyepiece,
  Lens,
  Filter,
} from '../../shared/models/equipment/equipment';

import { Site, Target } from '../../shared/models/models';
import { RequestParams } from '../../shared/services/request-params.model';

export default class ObservationSearchParameters extends RequestParams {

  public readonly scope = new Scope();
  public readonly site = new Site();
  public readonly eyepiece = new Eyepiece();
  public readonly lens = new Lens();
  public readonly target = new Target();
  public readonly filter = new Filter();
  public readonly startDate: Date;
  public readonly endDate: Date;

  constructor(props?: Partial<ObservationSearchParameters>) {
    super(props);
  }

  protected override getQueryParams(): { name: string; value: any }[] {
    return [
      ...super.getQueryParams(),
      { name: 'scope', value: this.scope.id },
      { name: 'site', value: this.site.id },
      { name: 'eyepiece', value: this.eyepiece.id },
      { name: 'lens', value: this.lens.id },
      { name: 'target', value: this.target.id },
      { name: 'filter', value: this.filter.id },
      { name: 'startDate', value: this.startDate },
      { name: 'endDate', value: this.endDate },
    ];
  }

}
