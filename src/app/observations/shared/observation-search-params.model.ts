import { RequestParams } from '../../shared/services/request-params.model';

export class ObservationSearchParams extends RequestParams {

  public sessionId: string;

  public targetId: string;

  constructor(props?: Partial<ObservationSearchParams>) {
    super(props);
  }

  protected override getQueryParams(): { name: string; value: any }[] {
    return [
      ...super.getQueryParams(),
      { name: 'session', value: this.sessionId },
      { name: 'target', value: this.targetId },
    ];
  }

}
