import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ToDoDTO } from '../../interfaces/api/todo.interface';

export const todoActions = createActionGroup({
  source: '[Todo Page]',
  events: {
    load: emptyProps(),
    'load Success': props<{ todoList: ToDoDTO[] }>(),
    'load Failure': props<{ error: any }>(),
  },
});
