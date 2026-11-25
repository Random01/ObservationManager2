import * as MenuActions from './navigation-menu.actions';
import { initialState, navigationMenuReducer } from './navigation-menu.reducer';

describe('navigationMenuReducer', () => {
  it('collapses, expands, and toggles the menu', () => {
    const collapsed = navigationMenuReducer(initialState, MenuActions.collapse());
    expect(collapsed.expanded).toBeFalse();

    const expanded = navigationMenuReducer(collapsed, MenuActions.expand());
    expect(expanded.expanded).toBeTrue();
    expect(navigationMenuReducer(expanded, MenuActions.toggle()).expanded).toBeFalse();
    expect(navigationMenuReducer(collapsed, MenuActions.toggle()).expanded).toBeTrue();
  });
});
