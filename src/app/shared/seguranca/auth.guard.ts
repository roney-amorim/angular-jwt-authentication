import { MessageService } from "primeng/primeng";
import { AuthService } from "./auth.service";
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private message: MessageService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // let loggedIn: boolean;
    // this.authService.isLoggedin.subscribe(rx => { loggedIn = rx });
    if (!this.authService.isLoggedIn()) {
      this.authService.refreshToken().subscribe(resp => {
        if (this.authService.isLoggedIn()) {
          return of(next.data.roles && this.authService.hasAnyPermission(next.data.roles));
        } else {
          this.router.navigate(['/login']);
          return of(false);
        }
      });
      this.authService.logout();
      this.router.navigate(['/login']);
      return of(false);
    } else if(next.data.roles && !this.authService.hasAnyPermission(next.data.roles)){

      this.message.add({severity: 'error', summary: 'Não Autorizado', detail: 'Usuário logado sem permissão de acesso.  ' + this.router.getCurrentNavigation()});
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);
  }
}
