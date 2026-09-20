import { Component, inject, signal } from '@angular/core';
import { Incident, IncidentSeverity, IncidentsService } from '../incidents.service';
import { form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

interface IncidentFormData {
  title: string;
  description: string;
  severity: IncidentSeverity | '';
}

@Component({
  selector: 'app-report-incident',
  imports: [
    FormField,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormRoot,
  ],
  templateUrl: './report-incident.html',
  styleUrl: './report-incident.scss',
})
export class ReportIncident {
  private readonly incidentService = inject(IncidentsService);

  readonly severities = Object.values(IncidentSeverity);
  readonly incidentModel = signal<IncidentFormData>({
    title: '',
    description: '',
    severity: '',
  });

  readonly incidentForm = form(this.incidentModel, (schemaPath) =>  {
    required(schemaPath.title, {
      message: 'Title is required',
    });

    minLength(schemaPath.title, 5, {
      message: 'Title must contain at least 5 characters',
    });

    required(schemaPath.severity, {
      message: 'Severity is required',
    });

  },
  {
    submission: {
      action: async (filed) => {
        const value = filed().value();

        const incident: Incident = {
          title: value.title,
          description: value.description,
          severity: value.severity as IncidentSeverity
        }

        this.incidentService.createIncident(incident);
      }
    }
  });
}
