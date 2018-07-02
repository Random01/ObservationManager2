import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import Scope from '../common/models/equipment/scope.model';
import ScopeService from './shared/scope.service';

import { ScopesList } from './scopes-list.component';
import {
    SCOPES_PAGE_UNLOADED,
    SCOPES_PAGE_LOADED,
    REMOVE_SCOPE
} from '../actions/scope-action-types';

const AddNewScopeLink = props => <Link to='/add-new-scope' {...props} />;

const mapStateToProps = state => {
    return state.scopes;
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: payload => {
            dispatch({
                type: SCOPES_PAGE_LOADED,
                payload
            });
        },
        onUnload: () => {
            dispatch({
                type: SCOPES_PAGE_UNLOADED,
            });
        },
        onRemoveScope: (scopeId: number) => {
            dispatch({
                type: REMOVE_SCOPE,
                scopeId
            });
        }
    };
};

interface Payload {
    scopes: Scope[];
}

interface ScopesProps {
    onUnload: () => void;
    onLoad: (payload: Payload) => void;
    scopes: Scope[];
}

class Scopes extends React.Component<ScopesProps> {

    componentWillMount() {
        ScopeService.getAll().subscribe(scopes => {
            this.props.onLoad(({ scopes }));
        });
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    public render() {

        const scopes = this.props.scopes || [];

        return (
            <div>
                <ScopesList scopes={scopes} />
                <Divider />
                <div>
                    <Button
                        component={AddNewScopeLink}
                        variant='contained'
                        color='primary'>
                        Add New Scope
                    </Button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scopes);
