import { filter, groupBy } from 'lodash';

import { Connection } from 'mongoose';

import { BaseMongooseStore, PaginatedItems } from '../common';
import { ObservationModel } from '../observation';

import { ObservingProgramSchema } from './observing-program.schema';

export class ObservingProgramStore extends BaseMongooseStore<any, any> {

    constructor(db: Connection) {
        super(db.model('observing-programs', ObservingProgramSchema));
    }

    public getById({ id, userId }) {
        return super.getById({
            id,
            userId,
            populationDetails: [
                ['userCreated', '_id userName firstName lastName'],
                ['userModified', '_id userName firstName lastName'],
                ['targets', '_id name'],
            ],
        });
    }

    /**
     * Gets an overall statistics for a selected observing program.
     */
    public getOverallStatistics({ id }): Promise<{ observedCount: number; totalCount: number }> {
        return this.model
            .getById(id)
            .then(observingProgram => Promise.all([
                observingProgram.targets,
                (ObservationModel as any).getByTargets(observingProgram.targets)
            ]))
            .then(([targets, observations]) => {
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
    public getStatistics({ id, page, size }): Promise<PaginatedItems<any>> {
        return this.model
            .getById(id)
            .then(observingProgram => {
                const startIndex = page * size;
                const targets = observingProgram.targets.slice(startIndex, startIndex + size);

                return Promise.all([
                    targets,
                    (ObservationModel as any).getByTargets(targets),
                    observingProgram.targets.length,
                ]);
            })
            .then(([targets, observations, totalCount]) => {
                const observationsToTarget = groupBy(observations, o => o.target);
                const targetsStatistics = targets.map(target => ({
                    target,
                    observations: observationsToTarget[target.id],
                }));

                return {
                    items: targetsStatistics,
                    pageCount: page != null ? page : 0,
                    pages: size != null ? Math.ceil(totalCount / size) : 1,
                    totalCount,
                };
            });
    }

}
