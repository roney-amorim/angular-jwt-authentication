import { AuthService } from "./../auth.service";
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/model';
import { MessageService } from 'primeng/primeng';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(private auth: AuthService, private msg: MessageService) { }

  ngOnInit() {
  }

  login() {
      this.auth.login(this.usuario);
  }

}
