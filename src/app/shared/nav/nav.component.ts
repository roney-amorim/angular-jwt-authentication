import { AuthService } from '../seguranca/auth.service';
import { Component, OnInit} from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userItems: MenuItem[];
  items: MenuItem[];

  constructor(private authService: AuthService) { 
  }

  ngOnInit() {

    this.userItems = [
      { label: 'Sair', icon: 'fa fa-sign-out' }
    ];

    this.items = [
      { label: 'Home', icon: 'fa fa-home', routerLink:['/'] },
      { label: 'Clientes', icon: 'fa fa-users', routerLink:['/clientes'],
      visible: this.authService.hasAnyPermission(['ROLE_CADASTRAR', 'ROLE_CONSULTAR']),
      }
    ];
  }

  logout() {
    this.authService.logout();
  }

}
