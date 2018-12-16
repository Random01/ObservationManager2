/**
 * Type of optics. Not restricted to an enumeration to cover exotic constructions
 */
export class OpticsType {

    public name: string;

    constructor(param: { name: string }) {
        this.name = param.name;
    }
}
