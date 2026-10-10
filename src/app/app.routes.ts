import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { missionResolver } from './features/missions/mission.resolver';

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
    resolve: { mission: missionResolver },
    loadComponent: () => import('./features/missions/mission-details/mission-details')
  },
  {
    path: 'incidents',
    loadComponent: () => import('./features/incidents/incidents')
  }
];
