import { Component, signal } from '@angular/core';

export interface StatusCard {
  title: string;
  value: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly greeting = signal('Good morning, Commander!');
}
