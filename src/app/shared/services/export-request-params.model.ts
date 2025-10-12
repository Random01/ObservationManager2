import { ExportType } from '../models/export-type.model';
import { Param, RequestParams } from './request-params.model';

export class ExportRequestParams extends RequestParams {
  public readonly exportType: ExportType;

  constructor(props: Partial<ExportRequestParams> = {}) {
    super(props);
  }

  protected override getQueryParams(): Param[] {
    return [...super.getQueryParams(), { name: 'exportType', value: this.exportType }];
  }
}
