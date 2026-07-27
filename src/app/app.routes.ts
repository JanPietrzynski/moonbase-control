import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Missions } from './features/missions/missions';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'missions',
    component: Missions
  }
];
