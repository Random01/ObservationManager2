import { RequestParams } from '../../shared/services/request-params.model';
import { SortOrder } from '../../shared/models/sort-order.model';
import { TargetType } from '../../shared/models/target-type.model';

export class TargetSearchParams extends RequestParams {

    public name: string;

    public type: TargetType;

    constructor(props?: {
        page?: number,
        size?: number,
        sortField?: string,
        sortDirection?: SortOrder,
        name?: string,
        type?: TargetType
    }) {
        super(props);
        Object.assign(this, props);
    }

    protected getQueryParams(): { name: string, value: any }[] {
        const params = super.getQueryParams();

        params.push({ name: 'name', value: this.name });
        params.push({ name: 'type', value: this.type });

        return params;
    }

}
