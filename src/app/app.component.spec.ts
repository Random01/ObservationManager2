import { Store } from '@ngrx/store';
import { firstValueFrom, of } from 'rxjs';

import { AppComponent } from './app.component';
import * as AuthActions from './store/auth/auth.actions';
import * as MenuActions from './store/navigation-menu/navigation-menu.actions';

describe('AppComponent', () => {
  it('restores authentication on startup and dispatches navigation changes', () => {
    const store = jasmine.createSpyObj<Store>('Store', ['select', 'dispatch']);
    store.select.and.returnValue(of({ expanded: true }));
    const component = new AppComponent(store);
    component.ngOnInit();
    component.toggleSideNav();

    expect(store.dispatch.calls.allArgs()).toEqual([[AuthActions.populate()], [MenuActions.toggle()]]);
  });

  it('exposes the expanded state from the navigation menu store', async () => {
    const store = jasmine.createSpyObj<Store>('Store', ['select']);
    store.select.and.returnValue(of({ expanded: false }));
    expect(await firstValueFrom(new AppComponent(store).opened$)).toBeFalse();
  });
});
