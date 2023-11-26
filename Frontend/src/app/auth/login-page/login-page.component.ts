// Login.component

import { Component } from '@angular/core';
import { YourApiService } from '../../your-api.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(
    private apiService: YourApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  onLoginSuccess() {
    // Предположим, что вы получаете информацию о суперпользователе из ответа сервера
    const isSuperUser = true; // Подставьте сюда значение суперпользователя

    this.authService.notifyLogin('username', isSuperUser);
    // Другая логика после успешного входа, например, перенаправление на нужную страницу
  }

  loginUser() {
    const userData = {
      username: this.username,
      password: this.password,
    };

    this.apiService.loginUser(userData).subscribe(
      (response: any) => {
        console.log('Авторизация успешна', response);
        // Предположим, что сервер возвращает информацию о суперпользователе
        const isSuperUser = response.isSuperUser; // Подставьте сюда значение суперпользователя
        this.authService.notifyLogin(this.username, isSuperUser);
        this.router.navigate(['/']);
      },
      (error: any) => {
        // Обработка ошибок
      }
    );
  }
}
