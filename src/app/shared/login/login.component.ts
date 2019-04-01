import { catchError, first } from "rxjs/operators";
import { AuthService } from "../seguranca/auth.service";
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/model';
import { MessageService } from 'primeng/primeng';
import { Observable, throwError } from "rxjs";
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private auth: AuthService, private msg: MessageService,
    private router: Router) { 
      if (this.auth.isLoggedIn()) { 
        this.router.navigate(['/']);
      }
    }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          this.router.navigate(['/login']);
        });
  }
}