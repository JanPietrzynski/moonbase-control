import { Component, inject } from '@angular/core';
import { MissionsService } from './missions.service';

@Component({
  selector: 'app-missions',
  imports: [],
  templateUrl: './missions.html',
  styleUrl: './missions.scss',
})
export default class Missions {
  private readonly missionsService = inject(MissionsService);
  readonly missions = this.missionsService.missions;
}
