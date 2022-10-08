import filter from 'lodash/filter';
import groupBy from 'lodash/groupBy';

import { BaseMongooseStore, PaginatedItems } from '../common';
import { ObservationModel } from '../observation';
import { ObservingProgram } from './observing-program.interface';
import { OverallStatistics } from './overall-statistics.interface';
import { Statistics } from './statistics.interface';
import { StatisticsRequest } from './statistics-request.interface';
import { ObservingProgramModel } from './observing-program.model';

export class ObservingProgramStore extends BaseMongooseStore<any, ObservingProgram> {

  constructor() {
    super(ObservingProgramModel);
  }

  public override getById({ id, userId }: { id: string; userId: string }): Promise<ObservingProgram> {
    return super.getById({
      id, userId, populationDetails: [
        ['userCreated', '_id userName firstName lastName'],
        ['userModified', '_id userName firstName lastName'],
        ['targets', '_id name'],
      ],
    });
  }

  /**
   * Gets an overall statistics for a selected observing program.
   */
  public getOverallStatistics({ id }: { id: string }): Promise<OverallStatistics> {
    return this.model
      .getById(id)
      .then((observingProgram: ObservingProgram) => Promise.all([
        observingProgram.targets,
        (ObservationModel as any).getByTargets(observingProgram.targets)
      ]))
      .then(([targets, observations]: [any[], any[]]) => {
        const observationsToTarget = groupBy(observations, o => o.target);
        const observedTargets = filter(targets, target => !!observationsToTarget[target.id]);

        return {
          observedCount: observedTargets.length,
          totalCount: targets.length,
        };
      });
  }

  /**
   * Returns a list of observed objects.
   */
  public getStatistics({ id, page, size }: StatisticsRequest): Promise<PaginatedItems<Statistics>> {
    return this.model
      .getById(id)
      .then((observingProgram: ObservingProgram) => {
        const startIndex = page * size;
        const targets = observingProgram.targets.slice(startIndex, startIndex + size);

        return Promise.all([
          targets,
          (ObservationModel as any).getByTargets(targets),
          observingProgram.targets.length,
        ]);
      })
      .then(([targets, observations, totalCount]: [any[], any[], number]) => {
        const observationsToTarget = groupBy(observations, o => o.target);
        const targetsStatistics = targets.map(target => ({
          target,
          observations: observationsToTarget[target.id],
        }));

        return {
          items: targetsStatistics,
          pageCount: page ?? 0,
          pages: size != null ? Math.ceil(totalCount / size) : 1,
          totalCount,
        };
      });
  }

}
