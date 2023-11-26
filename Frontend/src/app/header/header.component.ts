// header.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { YourApiService } from '../your-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo: string = '/assets/Logo.png';
  exit: string = '/assets/exit.svg';
  isLoggedIn: boolean = false;
  username: string | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private yourApiService: YourApiService
  ) {}

  ngOnInit() {
    this.restoreAuthentication();

    this.authService.onLogin().subscribe((username) => {
      this.isLoggedIn = true;
      this.username = username;
      this.authService.saveAuthenticationState(); // Изменено
    });

    this.authService.onLogout().subscribe(() => {
      this.isLoggedIn = false;
      this.username = null;
      this.authService.clearAuthenticationState(); // Изменено
    });
  }

  restoreAuthentication() {
    const loggedInUser = this.authService.getLoggedInUser();
    if (loggedInUser) {
      this.isLoggedIn = true;
      this.username = loggedInUser;
    } else {
      // Если пользователь не вошел, проверяем аутентификацию на сервере
      this.checkAuthentication();
    }
  }

  checkAuthentication() {
    this.yourApiService.checkAuthentication().subscribe(
      (isAuthenticated) => {
        if (isAuthenticated) {
          const loggedInUser = this.authService.getLoggedInUser();
          if (loggedInUser) {
            this.isLoggedIn = true;
            this.username = loggedInUser;
            this.authService.saveAuthenticationState(); // Изменено
          }
        }
      },
      (error) => {
        console.error('Ошибка при проверке аутентификации', error);
      }
    );
  }

  logout() {
    this.authService.notifyLogout();
    this.router.navigate(['/']);
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
