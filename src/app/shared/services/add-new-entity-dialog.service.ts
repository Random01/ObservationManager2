import { StorageService } from './storage.service';
import { Entity } from '../models/models';

export abstract class AddNewEntityDialogService<T extends Entity, S extends StorageService<T>> {

    constructor(
        protected service: S
    ) {
    }

    public abstract openDialog(): Promise<T>;

}
