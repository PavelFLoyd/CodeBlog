import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class YourApiService {
  private apiUrl = 'http://127.0.0.1:8000/blog/api/v1';

  constructor(private http: HttpClient, private authService: AuthService) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
}
