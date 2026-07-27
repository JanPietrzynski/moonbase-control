import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'missions',
    loadComponent: () => import('./features/missions/missions').then((m) => m.Missions),
  }
];
