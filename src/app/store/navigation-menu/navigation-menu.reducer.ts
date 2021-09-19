import { createReducer, on } from '@ngrx/store';

import { NavigationMenuState } from './navigation-menu-state.interface';
import * as NavigationMenuActions from './navigation-menu.actions';

export const initialState: NavigationMenuState = {
  expanded: true,
};

export const navigationMenuReducer = createReducer(
  initialState,

  on(NavigationMenuActions.expand, state => ({
    ...state,
    expanded: true,
  })),

  on(NavigationMenuActions.collapse, state => ({
    ...state,
    expanded: false,
  })),

  on(NavigationMenuActions.toggle, state => ({
    ...state,
    expanded: !state.expanded,
  })),
);
