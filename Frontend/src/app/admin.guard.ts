// admin.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('isSuperUser:', this.authService.isSuperUser());

    if (this.authService.isSuperUser()) {
      console.log('Доступ разрешен для суперпользователей.');
      return true; // Разрешить доступ суперпользователям
    } else {
      console.log('Доступ запрещен: вы не являетесь суперпользователем');
      this.router.navigate(['/']); // Перенаправить на страницу входа, если не суперпользователь
      return false;
    }
  }
}
