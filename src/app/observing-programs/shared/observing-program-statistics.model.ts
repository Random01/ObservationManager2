export default class ObservingProgramStatistics {

    public totalCount: number;
    public observedCount: number;

    constructor(params?: Partial<ObservingProgramStatistics>) {
        Object.assign(this, params);
    }

    public getCompletenes(): number {
        return this.observedCount / this.totalCount;
    }
}
