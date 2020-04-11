import { Entity } from './models';
import { Target } from './target.model';

export class ObservingProgram extends Entity {

    public name: string;

    public description: string;

    public targets: Target[];

    constructor(params?: Partial<ObservingProgram>) {
        super(params);
        this.targets = [];
        Object.assign(this, params);
    }

    public serialize(): Object {
        return Object.assign(super.serialize(), {
            name: this.name,
            description: this.description,
            targets: this.targets.map((target) => target.id),
        });
    }

    public deserialize(state: any): void {
        super.deserialize(state);

        this.name = state.name;
        this.description = state.description;

        this.targets = (state.targets || []).map((targetState: any) => {
            const target = new Target();
            target.deserialize(targetState);
            return target;
        });
    }

}
