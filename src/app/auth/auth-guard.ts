import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from './auth';

export const authGuard: CanMatchFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return auth.isAuthenticated()
    ? true
    : router.navigate(['/home']);
};
