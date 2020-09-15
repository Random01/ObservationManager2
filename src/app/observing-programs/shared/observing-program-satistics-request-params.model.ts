import { RequestParams } from '../../shared/services/request-params.model';

export class ObservingProgramStatisticsRequestParams extends RequestParams {

    public observingProgramId: string;

    protected getQueryParams(): { name: string; value: any }[] {
        const params = super.getQueryParams();

        params.push({ name: 'id', value: this.observingProgramId });

        return params;
    }

}
