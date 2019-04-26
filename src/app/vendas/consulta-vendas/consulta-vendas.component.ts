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
    this.carregarVendas();
  }

  carregarVendas() {
    this.service.consultar().subscribe(response => {
      console.log(response);
      this.vendas = response;
    }, erro => {
      this.message.add({ severity: 'error', summary: 'Erro ao carregar vendas', detail: erro.message });
    });
  }

  remover(venda: Venda) {
    this.service.deletar(venda.codigoVenda).subscribe(() => {
      this.carregarVendas();
      this.message.add({ severity: 'success', summary: 'Sucesso', detail: 'Venda cancelada com sucesso' });
    }, erro => {
      this.message.add({ severity: 'error', summary: 'Erro ao carregar vendas', detail: erro.message });
    });
  }

}
