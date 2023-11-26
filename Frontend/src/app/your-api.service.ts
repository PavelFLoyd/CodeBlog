// your-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root',
})
export class YourApiService {
  private apiUrl = 'http://127.0.0.1:8000/blog/api/v1';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  logout(): Observable<any> {
    return this.http.get(`${this.apiUrl}/logout`);
  }
  checkAuthentication(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/is_authenticated`);
  }
  createArticle(articleData: any): Observable<Article> {
    return this.http.post<Article>(`${this.apiUrl}/article`, articleData);
  }
  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/current_user`);
  }
}
