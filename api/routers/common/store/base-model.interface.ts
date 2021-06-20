export interface BaseModel {
    find: (requestParameters?: any) => any;
    findOne: (requestParameters?: any) => any;
    updateOne: (requestParameters: any, entity: any, callback: any) => any;
    create: (entity: any, callback: any) => void;
    deleteOne: (requestParameters: any, callback: any) => void;
}
