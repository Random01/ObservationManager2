import { BaseComponent } from './base-component';

import { Entity } from '../models/entity.model';

export abstract class BaseEntityComponent<T extends Entity> extends BaseComponent {

    public item: T;

}
