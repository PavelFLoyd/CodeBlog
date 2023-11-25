import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    const registerData = { username, password };
    return this.http.post('/domen/blog/api/v1/register', registerData);
  }
}
