import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInUser: string | null = null;
  private loginSubject = new Subject<string | null>();
  private logoutSubject = new Subject<void>();

  getLoggedInUser(): string | null {
    return this.loggedInUser;
  }

  notifyLogin(username: string): void {
    this.loggedInUser = username;
    this.loginSubject.next(username);
  }

  notifyLogout(): void {
    this.loggedInUser = null;
    this.logoutSubject.next();
  }

  onLogin(): Observable<string | null> {
    return this.loginSubject.asObservable();
  }

  onLogout(): Observable<void> {
    return this.logoutSubject.asObservable();
  }
}
