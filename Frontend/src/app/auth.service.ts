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
  private currentUser: { isSuperUser?: boolean } = {};

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

  notifyLogin(username: string, isSuperUser: boolean): void {
    this.loggedInUser = username;
    this.currentUser = { isSuperUser };
    this.loginSubject.next(username);
    this.saveAuthenticationState();
  }

  notifyLogout(): void {
    this.loggedInUser = null;
    this.currentUser = {};
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

  isSuperUser(): boolean {
    return !!this.currentUser.isSuperUser;
  }

  isAuthenticated(): boolean {
    return !!this.loggedInUser;
  }
}
