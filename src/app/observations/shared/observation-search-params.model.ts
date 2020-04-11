import { RequestParams } from '../../shared/services/request-params.model';

export class ObservationSearchParams extends RequestParams {

    public sessionId: string;

    public targetId: string;

    constructor(props?: Partial<ObservationSearchParams>) {
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
