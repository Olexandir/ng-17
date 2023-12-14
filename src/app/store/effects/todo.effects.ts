import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoAPIService } from '../../services/api/todo-api.service';
import { inject } from '@angular/core';
import { todoActions } from '../actions/todo.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

export const loadTodoList = createEffect(
  (actions$ = inject(Actions), todoService = inject(TodoAPIService)) => {
    return actions$.pipe(
      ofType(todoActions.load),
      switchMap(() =>
        todoService.getAll().pipe(
          map((todoList) => todoActions.loadSuccess({ todoList })),
          catchError((error) => of(todoActions.loadFailure({ error })))
        )
      )
    );
  },
  //! Што?
  {
    functional: true,
  }
);
