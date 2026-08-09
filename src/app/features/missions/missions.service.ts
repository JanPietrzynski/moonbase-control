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
  private readonly missionsState = signal<Mission[]>([
    {
      id: 'ASR482917',
      name: 'Artemis Supply Run',
      shortDescription:
        'Resupply the south pole base with food, equipment, and spare parts.',
      description:
        'A high-priority logistics mission delivering 12 metric tons of consumables and spare life-support components to Artemis Base Camp.',
      launchDate: '2026-05-12T14:23:17.000Z',
      status: 'active',
      priority: 'high',
      crewSize: 4,
    },
    {
      id: 'LHE635204',
      name: 'Lunar Habitat Expansion',
      shortDescription:
        'Deploy two modular habitat units and connect them to the main dome.',
      description:
        'Engineering mission to expand permanent living quarters at Shackleton Rim.',
      launchDate: '2026-06-03T09:45:52.000Z',
      status: 'planned',
      priority: 'medium',
      crewSize: 6,
    },
    {
      id: 'HET583104',
      name: 'Helium-3 Extraction',
      shortDescription:
        'Pilot-scale mining of helium-3 from polar regolith.',
      description:
        'Critical-path energy mission testing in-situ extraction of helium-3 for future fusion research.',
      launchDate: '2026-04-18T22:08:33.000Z',
      status: 'critical',
      priority: 'high',
      crewSize: 8,
    },
  ]);

  readonly missions = this.missionsState.asReadonly();
}

