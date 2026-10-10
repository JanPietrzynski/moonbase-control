import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, convertToParamMap, provideRouter, RedirectCommand, RouterStateSnapshot } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { Mission } from './missions.service';
import { missionResolver } from './mission.resolver';

describe('missionResolver', () => {
  let httpTesting: HttpTestingController;

  const route = { paramMap: convertToParamMap({ id: 'ASR482917' }) } as ActivatedRouteSnapshot;
  const state = {} as RouterStateSnapshot;

  const resolve = () =>
    firstValueFrom(
      TestBed.runInInjectionContext(
        () => missionResolver(route, state) as Observable<Mission | RedirectCommand>
      )
    );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    });
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should resolve the mission', async () => {
    const mission = { id: 'ASR482917', name: 'Lunar Relay Upgrade' } as Mission;
    const result = resolve();

    httpTesting.expectOne('http://localhost:4000/missions/ASR482917').flush(mission);

    expect(await result).toEqual(mission);
  });

  it('should redirect to the missions list when the mission does not exist', async () => {
    const result = resolve();

    httpTesting
      .expectOne('http://localhost:4000/missions/ASR482917')
      .flush(null, { status: 404, statusText: 'Not Found' });

    const redirect = await result;
    expect(redirect).toBeInstanceOf(RedirectCommand);
    expect((redirect as RedirectCommand).redirectTo.toString()).toBe('/missions');
  });
});
