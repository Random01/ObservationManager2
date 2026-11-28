export default class ObservingProgramStatistics {
  declare readonly totalCount: number;
  declare readonly observedCount: number;

  constructor(params?: Partial<ObservingProgramStatistics>) {
    Object.assign(this, params);
  }

  public getCompleteness(): number {
    return this.totalCount > 0 ? this.observedCount / this.totalCount : 0;
  }
}
