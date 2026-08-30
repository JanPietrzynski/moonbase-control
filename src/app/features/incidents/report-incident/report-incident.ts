import { Component, signal } from '@angular/core';
import { IncidentSeverity } from '../incidents.service';
import { form, FormField, minLength, required } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
    MatSelectModule],
  templateUrl: './report-incident.html',
  styleUrl: './report-incident.scss',
})
export class ReportIncident {
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

  });
}
