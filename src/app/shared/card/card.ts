import { Component, input, output } from '@angular/core';
import { StatusCard } from '../../features/dashboard/dashboard';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [MatIconModule, DatePipe],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
 readonly card = input.required<StatusCard>();
 selected = output<string>();

 selectCard() {
  this.selected.emit(this.card().id);
 }
}
