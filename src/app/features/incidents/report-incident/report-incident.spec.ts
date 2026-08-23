import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportIncident } from './report-incident';

describe('ReportIncident', () => {
  let component: ReportIncident;
  let fixture: ComponentFixture<ReportIncident>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportIncident],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportIncident);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
