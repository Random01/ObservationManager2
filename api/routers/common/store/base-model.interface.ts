export interface BaseModel<TEntity = any> {
  find: (requestParameters?: any) => any;
  findOne: (requestParameters?: any) => any;
  updateOne: (requestParameters: any, entity: TEntity, callback: any) => any;
  create: (entity: TEntity, callback: any) => void;
  deleteOne: (requestParameters: any, callback: any) => void;
}
