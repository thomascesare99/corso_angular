import { Injectable } from '@angular/core';

export type role = 'admin' | 'user' | 'guest'; // Defining a type for user roles

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private isLogged: boolean = true;

  private userRole: role = 'admin'; // Setting a default role for the user

  getRole(): role {
    return this.userRole;
  }

  isAuthenticated(): boolean {
    return this.isLogged;
  }
}
