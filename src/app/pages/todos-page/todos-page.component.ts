import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { todoActions } from '../../store/actions/todo.actions';
import { todoFeature } from '../../store/state/todo.state';
import { ToDoDTO } from '../../interfaces/api/todo.interface';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
})
export class TodosPageComponent {
  private store = inject(Store);

  public todoList = toSignal<ToDoDTO[], ToDoDTO[]>(
    this.store.select(todoFeature.selectTodoList),
    { initialValue: [] }
  );
  public isLoading = toSignal<boolean, boolean>(
    this.store.select(todoFeature.selectIsLoading),
    { initialValue: true }
  );

  ngOnInit(): void {
    this.store.dispatch(todoActions.load());
  }
}
