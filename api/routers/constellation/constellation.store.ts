import { DataConfig } from '../../data';
import { BaseMongooseStore } from '../common';
import { CsvReader } from './../../common/services';
import { Constellation } from './constellation.interface';
import { ConstellationModel } from './constellation.model';

export class ConstellationStore extends BaseMongooseStore<typeof ConstellationModel, any> {

  constructor() {
    super(ConstellationModel);
  }

  public async upload() {
    const constellations = await this.loadFromCsv();
    await this.model.insertMany(constellations);
  }

  private async loadFromCsv(): Promise<Constellation[]> {
    const reader = new CsvReader({
      path: DataConfig.constellationsCsvFilePath,
    });

    const data = await reader.read({ separator: ',' }) as any;
    return data.rows.map((row: any) => {
      const [_, constellation, IAU] = row;
      return {
        name: constellation,
        code: IAU,
      } as Constellation;
    });
  }

}
