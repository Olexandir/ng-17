import { createActionGroup, emptyProps } from '@ngrx/store';

export const userActions = createActionGroup({
  source: '[User Page]',
  events: {
    load: emptyProps(),
  },
});
