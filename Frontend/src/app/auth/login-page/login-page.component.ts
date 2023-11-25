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

  loginUser() {
    const userData = {
      username: this.username,
      password: this.password,
    };

    this.apiService.loginUser(userData).subscribe(
      (response: any) => {
        console.log('Авторизация успешна', response);
        this.authService.notifyLogin(this.username);
        this.router.navigate(['/']);
      },
      (error: any) => {
        // Обработка ошибок
      }
    );
  }
}
