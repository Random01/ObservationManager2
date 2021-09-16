import { AppContextService } from '../services';
import { DestroyableComponent } from './destroyable.component';

export class BaseComponent extends DestroyableComponent {

    public isLoading = false;

    constructor(
        protected readonly appContext: AppContextService,
    ) {
        super();
    }

    public startLoading(): void {
        this.isLoading = true;
    }

    public endLoading(): void {
        this.isLoading = false;
    }

    protected handleError(error: any, errorMessage?: string): void {
        this.appContext.messageService.error(errorMessage || error);
        this.appContext.logger.error(error);
    }

}
