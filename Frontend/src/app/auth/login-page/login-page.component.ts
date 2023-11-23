import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  someMethod() {
    const loginPage = new LoginPageComponent();
    loginPage.disableScroll();
  }
}
