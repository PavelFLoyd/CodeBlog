// register-page.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onRegisterClick() {
    if (this.username && this.password) {
      const userData = { username: this.username, password: this.password };

      this.authService.register(userData).subscribe(
        (response) => {
          console.log('Регистрация успешна', response);
        },
        (error) => {
          console.error('Ошибка регистрации', error);
        }
      );
    } else {
      console.warn('Заполните все поля формы');
    }
  }
}
