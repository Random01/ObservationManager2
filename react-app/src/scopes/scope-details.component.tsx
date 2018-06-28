import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import Scope from 'common/models/equipment/scope.model';

import './scope-details.component.less';

export interface ScopeDetailsProps {
    scope: Scope;
}

export class ScopeDetails extends React.Component<ScopeDetailsProps, {}> {

    public render() {
        return (
            <div className='om-scope-details'>
                <TextField
                    id='model'
                    label='Model'
                    value={this.props.scope.model}
                    margin='normal'
                />

                <TextField
                    id='aperture'
                    label='Aperture'
                    value={this.props.scope.aperture}
                    margin='normal'
                />

                <TextField
                    id='focalLength'
                    label='Focal Length'
                    value={this.props.scope.focalLength}
                    margin='normal'
                />

                <TextField
                    id='vendor'
                    label='Vendor'
                    value={this.props.scope.vendor}
                    margin='normal'
                />

            </div>
        );
    }

}
