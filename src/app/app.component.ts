import { AuthService } from "./shared/seguranca/auth.service";
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jwt-authentication';

  constructor(private router: Router, private auth: AuthService) { 
  }

  exibirMenu(){
   return this.auth.isLoggedIn();
  }

}
