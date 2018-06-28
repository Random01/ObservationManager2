import * as React from 'react';

import Scope from '../common/models/equipment/scope.model';

import { ScopeDetails } from './scope-details.component';

export class Scopes extends React.Component {

    public render() {

        const selectedScope = new Scope({
            model: 'SW 254/1200',
            aperture: 254,
            focalLength: 1200,
            vendor: 'Sky-Watcher'
        });

        return (
            <div>
                <ScopeDetails scope={selectedScope} />
            </div>
        );
    }
}
