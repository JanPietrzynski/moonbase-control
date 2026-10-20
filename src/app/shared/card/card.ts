import { Component, input, output } from '@angular/core';
import { StatusCard, StatusCardId } from '../../features/dashboard/dashboard';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  readonly card = input.required<StatusCard>();
  selected = output<StatusCardId>();

  selectCard(): void {
    this.selected.emit(this.card().id);
  }
}
