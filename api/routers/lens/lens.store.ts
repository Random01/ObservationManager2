import { Connection } from 'mongoose';

import { BaseMongooseStore } from '../common';

import { Lens } from './lens.interface';
import { LensSchema } from './lens.schema';

export class LensStore extends BaseMongooseStore<any, Lens> {

  constructor(db: Connection) {
    super(db.model('lenses', LensSchema));
  }

  public override getById({ id, userId }: { id: string; userId: string }) {
    return super.getById({
      id, userId, populationDetails: [
        ['userCreated', '_id userName firstName lastName'],
        ['userModified', '_id userName firstName lastName'],
      ],
    });
  }

  public override getAll(): Promise<Lens[]> {
    return new Promise((success, fail) => {
      this.model
        .find()
        .populate('userCreated')
        .populate('userModified')
        .exec((err: Error, docs: Lens[]) => {
          if (err) {
            fail(err);
          } else {
            success(docs);
          }
        });
    });
  }

}
