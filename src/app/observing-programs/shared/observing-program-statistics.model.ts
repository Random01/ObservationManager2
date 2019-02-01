export default class ObservingProgramStatistics {

    totalCount: number;
    observedCount: number;

    constructor(params?: {
        totalCount?: number,
        observedCount?: number
    }) {
        Object.assign(this, params);
    }

    public getCompletenes(): number {
        return this.observedCount / this.totalCount;
    }
}
