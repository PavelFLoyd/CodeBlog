import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logo: string = '/assets/Logo.png';
  exit: string = '/assets/exit.svg';

  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
