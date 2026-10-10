import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { missionExistsGuard } from './features/missions/mission-exists.guard';

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
    loadComponent: () => import('./features/missions/missions')
  },
  {
    path: 'missions/:id',
    canActivate: [missionExistsGuard],
    loadComponent: () => import('./features/missions/mission-details/mission-details')
  },
  {
    path: 'incidents',
    loadComponent: () => import('./features/incidents/incidents')
  }
];
