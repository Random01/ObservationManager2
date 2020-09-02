import { AppContextService } from '../services/app-context.service';

export class BaseComponent {

    constructor(
        protected readonly appContext: AppContextService,
    ) { }

    public isLoading = false;

    public startLoading(): void {
        this.isLoading = true;
    }

    public endLoading(): void {
        this.isLoading = false;
    }

    protected handleError(error: any): void {
        this.appContext.messageService.error(error);
        this.appContext.logger.error(error);
    }

}
