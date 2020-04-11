export class BaseComponent {

    public isLoading: Boolean = false;

    public startLoading() {
        this.isLoading = true;
    }

    public endLoading() {
        this.isLoading = false;
    }

}
