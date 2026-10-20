import { Pipe, PipeTransform } from '@angular/core';
import { IncidentSeverity } from '../../features/dashboard/dashboard';

const SEVERITY_LABELS: Record<IncidentSeverity, string> = {
  low: 'Low severity',
  medium: 'Medium severity',
  high: 'High severity',
  critical: 'Critical severity',
};

@Pipe({
  name: 'severity',
})
export class SeverityPipe implements PipeTransform {
  transform(value: IncidentSeverity): string {
    return SEVERITY_LABELS[value];
  }
}
