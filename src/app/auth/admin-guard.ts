import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from './auth';

export const adminGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth); // Injecting the Auth service
  const router = inject(Router); // Injecting the Router to navigate if not authenticated

  if (!auth.isAuthenticated()) {
    router.navigate(['/home']); // Redirecting to 'home' if not authenticated
    return false;
  }
  if (auth.getRole() === 'admin') {
    return true;
  } else {
    router.navigate(['/contact']); // Redirecting to 'contact' if not authorized
    return false;
  }
}
