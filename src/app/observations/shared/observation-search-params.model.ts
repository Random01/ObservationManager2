import { RequestParams } from '../../shared/services/request-params.model';
import { SortOrder } from '../../shared/models/sort-order.model';

export class ObservationSearchParams extends RequestParams {

    public sessionId: string;

    constructor(props?: {
        page?: number,
        size?: number,
        sortField?: string,
        sortDirection?: SortOrder,
        sessionId?: string
    }) {
        super(props);
        Object.assign(this, props);
    }

    protected getQueryParams(): { name: string, value: any }[] {
        const params = super.getQueryParams();

        params.push({ name: 'session', value: this.sessionId });

        return params;
    }

}
