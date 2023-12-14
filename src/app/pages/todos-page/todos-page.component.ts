import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { todoActions } from '../../store/actions/todo.actions';
import { todoFeature } from '../../store/state/todo.state';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
})
export class TodosPageComponent {
  private store = inject(Store);

  public todoList$ = this.store.select(todoFeature.selectTodoList);
  public isLoading$ = this.store.select(todoFeature.selectIsLoading);

  ngOnInit(): void {
    this.store.dispatch(todoActions.load());
  }
}
