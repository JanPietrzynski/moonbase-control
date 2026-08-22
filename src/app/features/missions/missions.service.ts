import { httpResource } from '@angular/common/http';
import { Service, signal } from '@angular/core';

export type MissionStatus = 'planned' | 'active' | 'critical';
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
}

