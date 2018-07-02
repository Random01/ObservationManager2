import {
    EDIT_SCOPE_PAGE_LOADED,
    EDIT_SCOPE_PAGE_UNLOADED,
    EDIT_SCOPE_UPDATE,
    EDIT_SCOPE_SCOPE_PROPERTY_CHANGED
} from '../actions/scope-action-types';

export default (state: any = { scope: {} }, action) => {
    switch (action.type) {
        case EDIT_SCOPE_PAGE_LOADED:
            return {
                scope: action.scope
            };
        case EDIT_SCOPE_PAGE_UNLOADED:
            return {
                scope: {}
            };
        case EDIT_SCOPE_UPDATE:
            return state;
        case EDIT_SCOPE_SCOPE_PROPERTY_CHANGED:
            return {
                scope: {
                    ...state.scope,
                    [action.property.name]: action.property.value
                }
            };
        default:
            return state;
    }
};

