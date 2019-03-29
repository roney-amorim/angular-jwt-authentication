import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  //Encapsular loggedIn
  get usuarioEstaLogado() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(usario: Usuario) {
    if (usario.nome !== '' && usario.senha !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
