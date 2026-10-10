import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Mission } from '../missions.service';
import MissionDetails from './mission-details';

const mission: Mission = {
  id: 'ASR482917',
  name: 'Lunar Relay Upgrade',
  shortDescription: 'Upgrade the relay array',
  description: 'Replace the aging relay array on the far side.',
  launchDate: '2026-11-01T08:00:00Z',
  status: 'planned',
  priority: 'high',
  crewSize: 4,
};

describe('MissionDetails', () => {
  let component: MissionDetails;
  let fixture: ComponentFixture<MissionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionDetails],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionDetails);
    fixture.componentRef.setInput('mission', mission);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the resolved mission', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('mat-card-title')?.textContent).toContain(mission.name);
    expect(element.querySelector('mat-card-subtitle')?.textContent).toContain(mission.id);
  });
});
