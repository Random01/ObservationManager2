import { createFeatureSelector } from '@ngrx/store';

import { NavigationMenuState } from './navigation-menu-state.interface';

export const selectNavigationMenu = createFeatureSelector<NavigationMenuState>('navigationMenu');
