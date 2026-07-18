import { Component, signal } from '@angular/core';
import { Card } from '../../shared/card/card';

export interface StatusCard {
  title: string;
  value: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly greeting = signal('Good morning, Commander!');

  totalMissions: StatusCard = {
    title: 'Total Missions',
    value: 8,
  };

  activeMissions: StatusCard = {
    title: 'Active Missions',
    value: 2,
  };

  openIncidents: StatusCard = {
    title: 'Open Incidents',
    value: 17,
  };

  criticalIncidents: StatusCard = {
    title: 'Critical Incidents',
    value: 5,
  };
}
