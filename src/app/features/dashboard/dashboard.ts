import { Component, signal } from '@angular/core';
import { Card } from '../../shared/card/card';

export interface StatusCard {
  id: string;
  title: string;
  value: number;
  icon: string;
  lastUpdated: Date;
}

@Component({
  selector: 'app-dashboard',
  imports: [Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly greeting = signal('Good morning, Commander!');
  protected selectedCardId = signal<string | null>(null);

  statusCards = signal<StatusCard[]>([
    {
      id: 'total-missions',
      title: 'Total Missions',
      value: 8,
      icon: 'rocket',
      lastUpdated: new Date('2026-07-24T08:15:00Z'),
    },
    {
      id: 'active-missions',
      title: 'Active Missions',
      value: 2,
      icon: 'check',
      lastUpdated: new Date('2026-07-24T10:42:00Z'),
    },
    {
      id: 'open-incidents',
      title: 'Open Incidents',
      value: 17,
      icon: 'report',
      lastUpdated: new Date('2026-07-24T13:28:00Z'),
    },
    {
      id: 'critical-incidents',
      title: 'Critical Incidents',
      value: 5,
      icon: 'error',
      lastUpdated: new Date('2026-07-24T16:55:00Z'),
    },
  ]);

  selectCard(cardId: string) {
    this.selectedCardId.set(cardId);
  }
}
