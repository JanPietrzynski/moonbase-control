import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivateFn, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map, of } from 'rxjs';

export const missionExistsGuard: CanActivateFn = (route) => {
  const http = inject(HttpClient);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);
  const id = route.paramMap.get('id');

  return http.get(`http://localhost:4000/missions/${id}`).pipe(
    map(() => true),
    catchError(() => {
      snackBar.open('No such mission exists', 'Close', { duration: 3000 });
      return of(router.parseUrl('/missions'));
    })
  );
};
