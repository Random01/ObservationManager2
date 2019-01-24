import { RequestParams } from '../../shared/services/request-params.model';
import { SortOrder } from '../../shared/models/sort-order.model';

export class ObservationSearchParams extends RequestParams {

    public sessionId: string;

    public targetId: string;

    constructor(props?: {
        page?: number,
        size?: number,
        sortField?: string,
        sortDirection?: SortOrder,
        sessionId?: string,
        targetId?: string
    }) {
        super(props);
        Object.assign(this, props);
    }

    protected getQueryParams(): { name: string, value: any }[] {
        const params = super.getQueryParams();

        params.push({ name: 'session', value: this.sessionId });
        params.push({ name: 'target', value: this.targetId });

        return params;
    }

}
