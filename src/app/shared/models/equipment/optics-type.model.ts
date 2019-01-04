import { Serializable } from '../../interfaces/serializable.interface';

/**
 * Type of optics. Not restricted to an enumeration to cover exotic constructions
 */
export class OpticsType implements Serializable {

    public name: string;

    constructor(param: { name: string }) {
        this.name = param.name;
    }

    public serialize(): Object {
        return { name: this.name };
    }

    deserialize(state: any): void {
        this.name = state.name;
    }
}
