import { Venda } from "./../../shared/models/model";
import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas.service';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-vendas',
  templateUrl: './consulta-vendas.component.html',
  styleUrls: ['./consulta-vendas.component.css']
})
export class ConsultaVendasComponent implements OnInit {

  vendas: Venda[];

  constructor(private service: VendasService, private message: MessageService, private router: Router) {
  }

  ngOnInit() {
  }
}
