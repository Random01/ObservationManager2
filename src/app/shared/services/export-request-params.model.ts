import { ExportType } from '../models/export-type.model';
import { Param, RequestParams } from './request-params.model';

export class ExportRequestParams extends RequestParams {

  public exportType: ExportType;

  constructor(props: Partial<ExportRequestParams> = {}) {
    super(props);
  }

  protected override getQueryParams(): Param[] {
    const result = super.getQueryParams();

    result.push({ name: 'exportType', value: this.exportType });

    return result;
  }

}
