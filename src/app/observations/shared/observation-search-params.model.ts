import { Param, RequestParams } from '../../shared/services/request-params.model';

export class ObservationSearchParams extends RequestParams {

  public readonly session: string;

  public readonly target: string;

  constructor(props?: Partial<ObservationSearchParams>) {
    super(props);
  }

  protected override getQueryParams(): Param[] {
    return [
      ...super.getQueryParams(),
      { name: 'session', value: this.session },
      { name: 'target', value: this.target },
    ];
  }

}
