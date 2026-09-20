import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import Missions from './missions';

describe('Missions', () => {
  let component: Missions;
  let fixture: ComponentFixture<Missions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Missions],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Missions);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.inject(HttpTestingController)
      .match(() => true)
      .forEach((req) => req.flush([]));
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
