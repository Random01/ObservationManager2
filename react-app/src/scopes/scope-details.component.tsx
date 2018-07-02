import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import Scope from 'common/models/equipment/scope.model';

import './scope-details.component.less';

export interface ScopeDetailsProps {
    scope: Scope;
    onScopePropertyChanged: (name: string, value: any) => void;
}

export class ScopeDetails extends React.PureComponent<ScopeDetailsProps> {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(e: React.ChangeEvent<HTMLInputElement>, name: string) {
        const newValue = e.target.value;

        if (newValue !== this.props.scope[name]) {
            this.props.onScopePropertyChanged(name, newValue);
        }
    }

    public render() {
        return (
            <form noValidate autoComplete='off'>
                <div className='om-scope-details'>
                    <TextField
                        id='model'
                        label='Model'
                        value={this.props.scope.model}
                        onChange={(e) => this.handleChange(e, 'model')}
                        margin='normal'
                    />

                    <TextField
                        id='aperture'
                        label='Aperture'
                        value={this.props.scope.aperture}
                        onChange={(e) => this.handleChange(e, 'aperture')}
                        margin='normal'
                    />

                    <TextField
                        id='focalLength'
                        label='Focal Length'
                        value={this.props.scope.focalLength}
                        onChange={(e) => this.handleChange(e, 'focalLength')}
                        margin='normal'
                    />

                    <TextField
                        id='vendor'
                        label='Vendor'
                        value={this.props.scope.vendor}
                        onChange={(e) => this.handleChange(e, 'vendor')}
                        margin='normal'
                    />

                </div>
            </form>
        );
    }

}
