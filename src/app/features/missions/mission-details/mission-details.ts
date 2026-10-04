import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mission-details',
  imports: [RouterLink, DatePipe, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './mission-details.html',
  styleUrl: './mission-details.scss',
})
export default class MissionDetails {}
