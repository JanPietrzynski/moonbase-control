import { httpResource } from '@angular/common/http';
import { Service } from '@angular/core';

export enum IncidentSeverity {
	Low = 'low',
	Medium = 'medium',
	High = 'high',
	Critical = 'critical',
}

export interface Incident {
	title: string;
	description: string;
	severity: IncidentSeverity;
}

@Service()
export class IncidentsService {
	private readonly incidentsState = httpResource<Incident[]>(
		() => 'http://localhost:4000/incidents',
		{
			defaultValue: []
		}
	);

	readonly incidents = this.incidentsState.asReadonly();
}
