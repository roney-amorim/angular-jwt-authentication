import { AuthService } from "./auth.service";
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let loggedIn: boolean;
    this.authService.isLoggedin.subscribe(x => { loggedIn = x });
    if (!loggedIn) {
      this.authService.refreshToken().subscribe(resp => {
        if (this.authService.isLoggedIn()) {
          return of(next.data.roles && this.authService.hasAnyPermission(next.data.roles));
        } else {
          this.router.navigate(['login']);
          return of(false);
        }
      });
      this.authService.logout();
      this.router.navigate(['login']);
      return of(false);
    } // if !loggedIn
    return of(next.data.roles && this.authService.hasAnyPermission(next.data.roles));
  }
}
