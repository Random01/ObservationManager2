import { Entity } from './models';
import { Target } from './target.model';

export class ObservingProgram extends Entity {

  public name: string;
  public targets: Target[] = [];

  constructor(params?: Partial<ObservingProgram>) {
    super(params);
  }

  public override serialize(): Object {
    return Object.assign(super.serialize(), {
      name: this.name,
      targets: this.targets.map(target => target.id),
    });
  }

  public override deserialize(state: any): void {
    super.deserialize(state);

    this.name = state.name;

    this.targets = (state.targets || []).map((targetState: any) => {
      const target = new Target();
      target.deserialize(targetState);
      return target;
    });
  }

  public override isValid(): boolean {
    return this.name != null && this.name.trim().length > 0;
  }

}
