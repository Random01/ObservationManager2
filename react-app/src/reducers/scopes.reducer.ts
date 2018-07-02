import {
    SCOPES_PAGE_LOADED,
    SCOPES_PAGE_UNLOADED,
    ADD_SCOPE,
    REMOVE_SCOPE
} from '../actions/scope-action-types';

export default (state: any = {}, action) => {
    switch (action.type) {
        case SCOPES_PAGE_LOADED:
            return {
                ...state,
                scopes: action.payload.scopes
            };
        case SCOPES_PAGE_UNLOADED:
            return {};
        case ADD_SCOPE:
            return {
                ...state,
                scopes: (state.scopes || []).concat(action.scope)
            };
        case REMOVE_SCOPE:
            const { scopeId } = action;

            return {
                ...state,
                scopes: (state.scopes || []).filter(scope => scope.id !== scopeId)
            };
        default:
            return state;
    }
};
