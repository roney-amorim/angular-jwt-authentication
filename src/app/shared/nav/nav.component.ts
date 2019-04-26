import { AuthService } from '../seguranca/auth.service';
import { Component, OnInit } from '@angular/core';
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
  toggleMenu: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {

    this.userItems = [
      { label: 'Sair', icon: 'fa fa-sign-out' }
    ];

    this.items = [
      { label: 'Home', icon: 'fa fa-home', routerLink: ['/'] },
      {
        label: 'Clientes', icon: 'fa fa-users', routerLink: ['/clientes'],
        visible: this.authService.hasAnyPermission(['ROLE_CLIENTE_CADASTRAR', 'ROLE_CLIENTE_CONSULTAR']),
      },
      {
        label: 'Veiculos', icon: 'fa fa-users', routerLink: ['/veiculos'],
        visible: this.authService.hasAnyPermission(['ROLE_VEICULO_CADASTRAR', 'ROLE_VEICULO_CONSULTAR']),
      },
      {
        label: 'Vendas', icon: 'fa fa-users', routerLink: ['/vendas'],
        visible: this.authService.hasAnyPermission(['ROLE_VENDA_CADASTRAR', 'ROLE_VENDA_CONSULTAR']),
      }
    ];
  }

  logout() {
    this.authService.logout();
  }

}
