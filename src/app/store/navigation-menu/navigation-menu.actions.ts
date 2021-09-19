import { createAction } from '@ngrx/store';

export const expand = createAction(
  '[Navigation Menu] Expand',
);

export const collapse = createAction(
  '[Navigation Menu] Collapse',
);

export const toggle = createAction(
  '[Navigation Menu] Toggle',
);

