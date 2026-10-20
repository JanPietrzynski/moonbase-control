import { Component, signal } from '@angular/core';
import { Card } from '../../shared/card/card';

export type StatusCardId =
  | 'total-missions'
  | 'active-missions'
  | 'open-incidents'
  | 'critical-incidents';

export interface StatusCard {
  id: StatusCardId;
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
  selectedCardId = signal<StatusCardId | null>(null);

  selectCard(cardId: StatusCardId): void {
    this.selectedCardId.set(cardId);
  }

  totalMissions: StatusCard = {
    id: 'total-missions',
    title: 'Total Missions',
    value: 8,
  };

  activeMissions: StatusCard = {
    id: 'active-missions',
    title: 'Active Missions',
    value: 2,
  };

  openIncidents: StatusCard = {
    id: 'open-incidents',
    title: 'Open Incidents',
    value: 17,
  };

  criticalIncidents: StatusCard = {
    id: 'critical-incidents',
    title: 'Critical Incidents',
    value: 5,
  };
}
