import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { firstValueFrom } from 'rxjs';

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
	private readonly http = inject(HttpClient);
	
	private readonly incidentsState = httpResource<Incident[]>(
		() => 'http://localhost:4000/incidents',
		{
			defaultValue: []
		}
	);

	readonly incidents = this.incidentsState.asReadonly();

	async createIncident(incident: Incident) {
		await firstValueFrom(
			this.http.post<Incident>(
				'http://localhost:4000/incidents',
				incident,
			),
		);

		this.incidentsState.reload();
	}
}
