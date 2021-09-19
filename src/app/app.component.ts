import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';

import * as AuthApiActions from './store/auth/auth.actions';
import { selectNavigationMenu } from './store/navigation-menu';
import * as NavigationMenuActions from './store/navigation-menu/navigation-menu.actions';

@Component({
	selector: 'om-app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

	public readonly opened$ = this.store.select(selectNavigationMenu)
		.pipe(map(p => p.expanded));

	constructor(private readonly store: Store) { }

	public ngOnInit(): void {
		this.store.dispatch(AuthApiActions.populate());
	}

	public toggleSideNav(): void {
		this.store.dispatch(NavigationMenuActions.toggle());
	}

}
