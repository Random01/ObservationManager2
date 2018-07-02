import {
    ADD_SCOPE_PAGE_LOADED,
    ADD_SCOPE_PAGE_UNLOADED,
    ADD_SCOPE_ADD_NEW,
    ADD_SCOPE_SCOPE_PROPERTY_CHANGED
} from '../actions/scope-action-types';

export default (state: any = { scope: {} }, action) => {
    switch (action.type) {
        case ADD_SCOPE_PAGE_LOADED:
            return {
                scope: action.scope
            };
        case ADD_SCOPE_PAGE_UNLOADED:
            return {
                scope: {}
            };
        case ADD_SCOPE_ADD_NEW:
            return state;
        case ADD_SCOPE_SCOPE_PROPERTY_CHANGED:
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
