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
    FormRoot,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule],
  templateUrl: './report-incident.html',
  styleUrl: './report-incident.scss',
})
export class ReportIncident {
  private readonly incidentsService = inject(IncidentsService);
  
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
    action: async (field) => {
      const value = field().value();

      const incident: Incident = {
        title: value.title,
        description: value.description,
        severity: value.severity as IncidentSeverity,
      };

      await this.incidentsService.createIncident(incident);
    }
  }
});
}
