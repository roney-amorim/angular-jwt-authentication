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
    private router: Router) { }

  ngOnInit() {
  }

  login() {
      this.auth.login(this.usuario)
      .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                },
                error => {
                    console.log(error);
                    this.router.navigate(['/login']);
                });
  }
}