import { BaseMongooseStore } from '../common';

import { TargetCsvLoader } from './target-csv-loader.service';
import { Target } from './target.interface';
import { TargetModel } from './target.model';

export class TargetStore extends BaseMongooseStore<typeof TargetModel, Target> {

  constructor() {
    super(TargetModel);
  }

  public override getById({ id, userId }: { id: string; userId: string }) {
    return super.getById({
      id,
      userId,
      populationDetails: {
        'userCreated': ['_id', 'userName', 'firstName', 'lastName'],
        'userModified': ['_id', 'userName', 'firstName', 'lastName'],
      },
    });
  }

  public override getItems({ requestParameters }: any) {
    return super.getItems({
      requestParameters,
      populationDetails: {
        'userCreated': ['_id', 'userName', 'firstName', 'lastName'],
        'userModified': ['_id', 'userName', 'firstName', 'lastName'],
      },
    });
  }

  public override search(params: { name: string; maxCount: number }) {
    const { name, maxCount = 10 } = params;

    return this.model
      .find({ name: new RegExp(name) })
      .limit(maxCount)
      .exec();
  }

  public async upload() {
    const loader = new TargetCsvLoader();
    const targets = await loader.load();
    await this.model.insertMany(targets);
    return ({ success: true });
  }

  public loadAllTargetsFromDb() {
    return this.model
      .find()
      .exec();
  }

  public loadTargetsFromCsv() {
    return (new TargetCsvLoader()).load();
  }

}
