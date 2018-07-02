import * as React from 'react';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import { ScopeDetails } from './scope-details.component';
import Scope from '../common/models/equipment/scope.model';
import ScopeService from './shared/scope.service';

import {
    EDIT_SCOPE_PAGE_LOADED,
    EDIT_SCOPE_PAGE_UNLOADED,
    EDIT_SCOPE_UPDATE,
    EDIT_SCOPE_SCOPE_PROPERTY_CHANGED
} from '../actions/scope-action-types';

import './add-scope.component.less';
import { connect } from 'react-redux';

const CancelLink = props => <Link to='/scopes' {...props} />;

const mapStateToProps = state => ({
    ...state.editScope
});

const mapDispatchToProps = dispatch => {
    return {
        onLoad: scope => {
            dispatch({
                type: EDIT_SCOPE_PAGE_LOADED,
                scope
            });
        },
        onUnload: () => {
            dispatch({
                type: EDIT_SCOPE_PAGE_UNLOADED,
            });
        },
        onScopePropertyChanged: (name, value) => {
            dispatch({
                type: EDIT_SCOPE_SCOPE_PROPERTY_CHANGED,
                property: {
                    name,
                    value
                }
            });
        },
        onUpdate: scope => {
            dispatch({
                type: EDIT_SCOPE_UPDATE,
                scope
            });
        }
    };
};

interface EditScopeProps {
    scope: Scope;
    onLoad: (scope: Scope) => void;
    onUnload: () => void;
    onUpdate: (scope: Scope) => void;
    onScopePropertyChanged: (name: String, value: any) => void;
}

class EditScope extends React.Component<EditScopeProps> {

    constructor(props) {
        super(props);

        this.handleScopeUpdate = this.handleScopeUpdate.bind(this);
        this.handleScopePropertyChanged = this.handleScopePropertyChanged.bind(this);
    }

    public handleScopeUpdate() {
        this.startLoading();
        ScopeService.update(this.props.scope).subscribe(() => {
            this.endLoading();
        });
    }

    public handleScopePropertyChanged(name: string, value: any) {
        this.props.onScopePropertyChanged(name, value);
    }

    public componentDidMount() {
        this.startLoading();
        const scopeId = '1';
        ScopeService.getById(scopeId).subscribe(payload => {
            this.props.onLoad(payload);
            this.endLoading();
        });
    }

    public componentWillUnmount() {
        this.props.onUnload();
    }

    public startLoading() {

    }

    public endLoading() {

    }

    public render() {

        return (
            <div className='om-edit-scope'>
                <ScopeDetails
                    scope={this.props.scope}
                    onScopePropertyChanged={this.handleScopePropertyChanged} />
                <Divider />
                <div>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={this.handleScopeUpdate}>
                        Update
                    </Button>

                    <Button
                        variant='contained'
                        color='primary'
                        component={CancelLink}>
                        Back
                    </Button>
                </div>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditScope);
