import { Component, signal } from '@angular/core';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-dashboard',
  imports: [Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly greeting = signal('Good morning, Commander!');
}
