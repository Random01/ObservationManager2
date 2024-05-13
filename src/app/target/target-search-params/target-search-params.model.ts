import { RequestParams } from '../../shared/services/request-params.model';
import { TargetType } from '../../shared/models/target-type.model';

export class TargetSearchParams extends RequestParams {

  public readonly name: string;

  public readonly type: TargetType;

  constructor(props?: Partial<TargetSearchParams>) {
    super(props);
  }

  protected override getQueryParams(): { name: string; value: any }[] {
    return [
      ...super.getQueryParams(),
      { name: 'name', value: this.name },
      { name: 'type', value: this.type },
    ];
  }

}
