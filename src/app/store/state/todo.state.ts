import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { ToDoDTO } from '../../interfaces/api/todo.interface';
import { todoActions } from '../actions/todo.actions';

export interface State {
  todoList: ToDoDTO[];
  isLoading: boolean;
  selectedId: number | null;
}

export const initialState: State = {
  todoList: [],
  isLoading: false,
  selectedId: null,
};

export const reducer = createReducer(
  initialState,
  on(todoActions.load, (state) => ({ ...state, isLoading: true })),
  on(todoActions.loadSuccess, (state, { todoList }) => ({
    ...state,
    todoList,
    isLoading: false,
  })),
  on(todoActions.loadFailure, (state) => ({ ...state, isLoading: false }))
);

export const todoFeature = createFeature({
  name: 'todoFeatureKey',
  reducer,
  extraSelectors: ({ selectSelectedId, selectTodoList }) => ({
    getSelectedTodo: createSelector(
      selectSelectedId,
      selectTodoList,
      (selectedId, todoList) => todoList.find(({ id }) => id === selectedId)
    ),
  }),
});
