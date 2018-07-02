import { combineReducers } from 'redux';

import scopesReducer from './scopes.reducer';
import addScopeReducer from './add-scope.reducer';
import editScopeReducer from './edit-scope.reducer';

export default combineReducers({
    scopes: scopesReducer,
    addScope: addScopeReducer,
    editScope: editScopeReducer
});
