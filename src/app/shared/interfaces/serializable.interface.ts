export interface Serializable {
    serialize(): any;
    deserialize(params: any): void;
}
