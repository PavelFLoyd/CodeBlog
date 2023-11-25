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
    this.authService.onRegistrationSuccess().subscribe(() => {
      // Update the view when registration is successful
      this.isLoggedIn = true;
      this.username = this.authService.getLoggedInUser();
    });
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
