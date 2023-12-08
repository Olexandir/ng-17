import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./pages/main-page/main-page.component').then(
        (component) => component.MainPageComponent
      ),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./pages/calendar-page/calendar-page.component').then(
        (component) => component.CalendarPageComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
