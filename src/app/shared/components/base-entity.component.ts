import { BaseComponent } from './base-component';

import { Entity } from '../models/entity.model';

export abstract class BaseEntityComponent<T extends Entity> extends BaseComponent {

    public item: T;
    public isLoading: Boolean = false;

    public startLoading() {
        this.isLoading = true;
    }

    public endLoading() {
        this.isLoading = false;
    }

}
