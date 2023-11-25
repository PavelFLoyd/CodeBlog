import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registrationSuccessSubject = new Subject<void>();
  private loggedInUser: string | null = null;

  notifyRegistrationSuccess(username: string): void {
    this.loggedInUser = username;
    this.registrationSuccessSubject.next();
  }

  getLoggedInUser(): string | null {
    return this.loggedInUser;
  }

  clearLoggedInUser(): void {
    this.loggedInUser = null;
  }

  onRegistrationSuccess(): Observable<void> {
    return this.registrationSuccessSubject.asObservable();
  }
}
