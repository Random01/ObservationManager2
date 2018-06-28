import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import { ScopeDetails } from './scope-details.component';
import Scope from '../common/models/equipment/scope.model';

export class AddScope extends React.Component {

    public render() {

        const newScope = new Scope();

        return (
            <div>
                <ScopeDetails scope={newScope} />
                <Divider />
                <div>
                    <Button
                        variant='contained'
                        color='primary'>
                        Add
                    </Button>
                    <Button
                        variant='contained'
                        color='primary'>
                        Cancel
                    </Button>
                </div>
            </div>
        );
    }

}
