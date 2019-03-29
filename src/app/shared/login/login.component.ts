import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  usuario: Usuario = new Usuario();
  constructor() { }

  ngOnInit() {
  }

  login(){
    this.usuario.nome = 'Roney Amorim';
    this.usuario.senha = '123456';
  }

}
