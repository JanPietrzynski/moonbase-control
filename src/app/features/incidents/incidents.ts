import { Component } from '@angular/core';
import { ReportIncident } from './report-incident/report-incident';

@Component({
  selector: 'app-incidents',
  imports: [ReportIncident],
  templateUrl: './incidents.html',
  styleUrl: './incidents.scss',
})
export default class Incidents { }
