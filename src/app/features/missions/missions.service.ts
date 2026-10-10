import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

export type MissionStatus = 'planned' | 'active' | 'critical' | 'completed';
export type MissionPriority = 'low' | 'medium' | 'high';

export interface Mission {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  launchDate: string;
  status: MissionStatus;
  priority: MissionPriority;
  crewSize: number;
}

@Service()
export class MissionsService {
  private readonly http = inject(HttpClient);

  private readonly missionsState = httpResource<Mission[]>(
    () => 'http://localhost:4000/missions',
    {
      defaultValue: []
    }
  );

  readonly missions = this.missionsState.asReadonly();

  loadMission(id: string): Observable<Mission> {
    return this.http.get<Mission>(`http://localhost:4000/missions/${id}`);
  }
}

