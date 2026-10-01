import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MissionsService } from '../missions.service';

@Component({
  selector: 'app-mission-details',
  imports: [RouterLink, DatePipe, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './mission-details.html',
  styleUrl: './mission-details.scss',
})
export default class MissionDetails {
  private readonly missionsService = inject(MissionsService);

  // Filled automatically from the `:id` part of the URL (see withComponentInputBinding in app.config.ts)
  readonly id = input.required<string>();

  readonly mission = this.missionsService.getMission(this.id);
}
