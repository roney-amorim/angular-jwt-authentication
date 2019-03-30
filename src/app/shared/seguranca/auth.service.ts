import { MessageService } from "primeng/primeng";
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/model';

@Injectable()
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  //Encapsular loggedIn
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private message: MessageService
  ) {}

  login(usario: Usuario) {
    if (usario.nome !== '' && usario.senha !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    } else{
      this.message.add({severity:'error', summary:'Erro', detail:'Usuário ou senha inválido!'});
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
