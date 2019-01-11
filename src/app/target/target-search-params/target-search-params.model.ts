import { RequestParams } from '../../shared/services/request-params.model';
import { SortOrder } from '../../shared/models/sort-order.model';

export class TargetSearchParams extends RequestParams {

    public name: string;

    constructor(props?: {
        page?: number,
        size?: number,
        sortField?: string,
        sortDirection?: SortOrder,
        name?: string
    }) {
        super(props);
        Object.assign(this, props);
    }

    protected getQueryParams(): { name: string, value: any }[] {
        const params = super.getQueryParams();

        params.push({ name: 'name', value: this.name });

        return params;
    }

}
