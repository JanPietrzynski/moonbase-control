import { Component, input, output } from '@angular/core';
import { StatusCard } from '../../features/dashboard/dashboard';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  readonly card = input.required<StatusCard>();
  selected = output<string>();

  selectCard(): void {
    console.log(this.card().id);
    this.selected.emit(this.card().id);
  }
}
