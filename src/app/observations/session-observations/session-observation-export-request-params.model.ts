import { ExportRequestParams, Param } from '../../shared/services';

export class SessionObservationExportRequestParams extends ExportRequestParams {

  public readonly session: string;

  constructor(props: Partial<SessionObservationExportRequestParams> = {}) {
    super(props);
  }

  protected override getQueryParams(): Param[] {
    return [
      ...super.getQueryParams(),
      { name: 'session', value: this.session },
    ];
  }

}
