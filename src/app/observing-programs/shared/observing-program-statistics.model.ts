export default class ObservingProgramStatistics {

  public readonly totalCount: number;
  public readonly observedCount: number;

  constructor(params?: Partial<ObservingProgramStatistics>) {
    Object.assign(this, params);
  }

  public getCompleteness(): number {
    return this.totalCount > 0
      ? this.observedCount / this.totalCount : 0;
  }
}
