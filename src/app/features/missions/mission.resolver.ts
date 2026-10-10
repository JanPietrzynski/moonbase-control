import { inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RedirectCommand, ResolveFn, Router } from "@angular/router";
import { catchError, of } from "rxjs";
import { Mission, MissionsService } from "./missions.service";

export const missionResolver: ResolveFn<Mission> = (route) => {
  const missionsService = inject(MissionsService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);
  const id = route.paramMap.get('id')!;

  return missionsService.loadMission(id).pipe(
    catchError(() => {
      snackBar.open('No such mission exists', 'Close', { duration: 3000 });
      return of(new RedirectCommand(router.parseUrl('/missions')));
    })
  );
}
