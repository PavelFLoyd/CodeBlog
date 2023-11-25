import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.onLogin().subscribe((username) => {
      this.isLoggedIn = true;
      this.username = username;
    });

    this.authService.onLogout().subscribe(() => {
      this.isLoggedIn = false;
      this.username = null;
    });
  }

  logout() {
    this.authService.notifyLogout();
    this.router.navigate(['/']);
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
