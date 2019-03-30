import { AuthService } from '../seguranca/auth.service';
import { Component, OnInit} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  usuarioLogado$: Observable<boolean>;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuarioLogado$ = this.authService.isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }

}
