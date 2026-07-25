import { Component, signal } from '@angular/core';
import { Card } from '../../shared/card/card';

export interface StatusCard {
  id: string;
  title: string;
  value: number;
  icon: string;
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
    },
    {
      id: 'active-missions',
      title: 'Active Missions',
      value: 2,
      icon: 'check',
    },
    {
      id: 'open-incidents',
      title: 'Open Incidents',
      value: 17,
      icon: 'report',
    },
    {
      id: 'critical-incidents',
      title: 'Critical Incidents',
      value: 5,
      icon: 'error',
    },
  ]);

  selectCard(cardId: string) {
    this.selectedCardId.set(cardId);
  }
}
