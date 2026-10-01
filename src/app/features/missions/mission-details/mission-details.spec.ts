import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import MissionDetails from './mission-details';

describe('MissionDetails', () => {
  let component: MissionDetails;
  let fixture: ComponentFixture<MissionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionDetails],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionDetails);
    fixture.componentRef.setInput('id', 'ASR482917');
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.inject(HttpTestingController)
      .match(() => true)
      .forEach((req) => req.flush({}));
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
