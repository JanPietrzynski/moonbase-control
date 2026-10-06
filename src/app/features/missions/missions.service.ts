import { httpResource } from '@angular/common/http';
import { Resource, Service, signal } from '@angular/core';

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
  private readonly missionsState = httpResource<Mission[]>(
    () => 'http://localhost:4000/missions',
    {
      defaultValue: []
    }
  );

  readonly missions = this.missionsState.asReadonly();

  getMission(id: () => string): Resource<Mission | undefined> {
    return httpResource<Mission>(() => `http://localhost:4000/missions/${id()}`).asReadonly();
  }
}

