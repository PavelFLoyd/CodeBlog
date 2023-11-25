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
    private apiService: YourApiService
  ) {}

  ngOnInit() {
    this.authService.onRegistrationSuccess().subscribe(() => {
      this.isLoggedIn = true;
      this.username = this.authService.getLoggedInUser();
    });
  }

  logout() {
    this.apiService.logout().subscribe(
      () => {
        console.log('Сессия завершена');
        this.authService.clearLoggedInUser();
        this.isLoggedIn = false;
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Ошибка при завершении сессии', error);
      }
    );
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
