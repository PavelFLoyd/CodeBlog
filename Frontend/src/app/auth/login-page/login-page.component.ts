import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const englishOnlyRegex = /^[a-zA-Z]*$/;
    if (!englishOnlyRegex.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
    }
  }
}
