import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import * as todoEffect from './store/effects/todo.effects';
import * as todoState from './store/state/todo.state';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState(todoState.todoFeature.name, todoState.reducer),
    provideStoreDevtools(),
    provideEffects(todoEffect),
    provideAnimations(),
  ],
};
