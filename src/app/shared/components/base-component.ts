export class BaseComponent {

    public isLoading = false;

    public startLoading() {
        this.isLoading = true;
    }

    public endLoading() {
        this.isLoading = false;
    }

}
