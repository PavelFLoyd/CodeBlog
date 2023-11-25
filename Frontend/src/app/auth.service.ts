// auth.service.ts

import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser: string | null = null;
  private loginSubject = new Subject<string | null>();
  private logoutSubject = new Subject<void>();
  private STORAGE_KEY = 'loggedInUser';

  constructor() {
    this.restoreAuthenticationState();
  }

  private restoreAuthenticationState() {
    const storedUser = localStorage.getItem(this.STORAGE_KEY);
    if (storedUser) {
      this.loggedInUser = storedUser;
      this.loginSubject.next(storedUser);
    }
  }

  getLoggedInUser(): string | null {
    return this.loggedInUser;
  }

  notifyLogin(username: string): void {
    this.loggedInUser = username;
    this.loginSubject.next(username);
    this.saveAuthenticationState();
  }

  notifyLogout(): void {
    this.loggedInUser = null;
    this.logoutSubject.next();
    this.clearAuthenticationState();
  }

  onLogin(): Observable<string | null> {
    return this.loginSubject.asObservable();
  }

  onLogout(): Observable<void> {
    return this.logoutSubject.asObservable();
  }

  saveAuthenticationState() {
    localStorage.setItem(this.STORAGE_KEY, this.loggedInUser || '');
  }

  clearAuthenticationState() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
