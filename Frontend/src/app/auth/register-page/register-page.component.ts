import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent {
  @HostListener('input', ['$event'])
  onInput(event: any) {
    const englishOnlyRegex = /^[a-zA-Z]*$/;
    if (!englishOnlyRegex.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
    }
  }
}
