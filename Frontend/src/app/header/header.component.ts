import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logo: string = '/assets/Logo.png';

  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
