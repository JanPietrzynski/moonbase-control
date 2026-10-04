import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MissionsService } from './missions.service';

@Component({
  selector: 'app-missions',
  imports: [RouterLink, DatePipe, MatCardModule, MatIconModule],
  templateUrl: './missions.html',
  styleUrl: './missions.scss',
})
export default class Missions {
  private readonly missionsService = inject(MissionsService);
  readonly missions = this.missionsService.missions;
}