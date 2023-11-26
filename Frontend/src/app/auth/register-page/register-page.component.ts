// RegisterPageComponent

import { Component } from '@angular/core';
import { YourApiService } from '../../your-api.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  username: string = '';
  password: string = '';

  constructor(
    private apiService: YourApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  registerUser() {
    const userData = {
      username: this.username,
      password: this.password,
    };

    this.apiService.registerUser(userData).subscribe(
      (response: any) => {
        console.log('Регистрация успешна', response);
        const isSuperUser = false; // В регистрации, обычно пользователь не является суперпользователем
        this.authService.notifyLogin(this.username, isSuperUser);
        this.router.navigate(['/']);
      },
      (error: any) => {
        // Обработка ошибок
      }
    );
  }
}
