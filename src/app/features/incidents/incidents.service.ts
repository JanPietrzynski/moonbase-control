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
	private readonly incidentsPath = 'http://localhost:4000/incidents';

	private readonly incidentsState = httpResource<Incident[]>(
		() => this.incidentsPath,
		{
			defaultValue: []
		}
	);

	readonly incidents = this.incidentsState.asReadonly();

	async createIncident(incident: Incident){
		await firstValueFrom(
			this.http.post<Incident>(
				this.incidentsPath,
				incident
			)
		)
		this.incidentsState.reload();
	}
}
