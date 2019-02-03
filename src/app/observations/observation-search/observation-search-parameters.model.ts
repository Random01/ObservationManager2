import {
    Scope,
    Eyepiece,
    Lens,
    Filter
} from '../../shared/models/equipment/equipment';

import { Site, Target } from '../../shared/models/models';
import { RequestParams } from '../../shared/services/request-params.model';

export default class ObservationSearchParameters extends RequestParams {

    public scope: Scope;

    public site: Site;

    public eyepiece: Eyepiece;

    public lens: Lens;

    public target: Target;

    public filter: Filter;

    public startDate: Date;

    public endDate: Date;

    constructor(props?: any) {
        super(props);

        this.scope = new Scope();
        this.site = new Site();
        this.eyepiece = new Eyepiece();
        this.lens = new Lens();
        this.target = new Target();
        this.filter = new Filter();
    }

    protected getQueryParams(): { name: string, value: any }[] {
        const params = super.getQueryParams();

        params.push({ name: 'scope', value: this.scope.id });
        params.push({ name: 'site', value: this.site.id });
        params.push({ name: 'eyepiece', value: this.eyepiece.id });
        params.push({ name: 'lens', value: this.lens.id });
        params.push({ name: 'target', value: this.target.id });
        params.push({ name: 'filter', value: this.filter.id });
        params.push({ name: 'startDate', value: this.startDate });
        params.push({ name: 'endDate', value: this.endDate });

        return params;
    }

}
