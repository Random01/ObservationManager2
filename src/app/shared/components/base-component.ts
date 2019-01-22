export class BaseComponent {

    isLoading: Boolean = false;

    constructor() {
    }

    public startLoading() {
        this.isLoading = true;
    }

    public endLoading() {
        this.isLoading = false;
    }

}
