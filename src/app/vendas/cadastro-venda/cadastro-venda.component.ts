import { Cliente } from "./../../shared/models/model";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MessageService } from 'primeng/primeng';
import { Venda, Veiculo } from 'src/app/shared/models/model';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-cadastro-venda',
  templateUrl: './cadastro-venda.component.html',
  styleUrls: ['./cadastro-venda.component.css']
})
export class CadastroVendaComponent implements OnInit {

  venda: Venda = new Venda();
  dataVenda: Date;

  veiculos: Veiculo[] = [];
  clientes: Cliente[] = [];

  constructor(private service: VendasService, private router: Router, private message: MessageService) {
  }

  ngOnInit() {

  }

  salvar() {
    this.dateToString();
    this.service.salvar(this.venda).subscribe(
      resp => {
        this.message.add({ severity: 'success', summary: 'Sucesso', detail: 'Venda cadastrada com sucesso.' });
        this.router.navigate(['vendas']);
      }, error => {
        console.log(error);
        this.message.add({ severity: 'error', summary: 'Erro', detail: error.message });
      }
    );
  }
  dateToString() {
    this.venda.dataVenda = this.dataVenda.toISOString().substring(0, 10);
  }

  filtrarClientes(event) {
    this.service.filtrarClientes().subscribe(response => {
      this.clientes = [];
      for (let item of response) {
        if (item.nome.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
          this.clientes.push(item);
        }
      }
    }, erro => {
      console.log(erro.message);
    });
  }

  filtrarVeiculos(event) {
    this.service.filtrarVeiculos().subscribe(response => {
      this.veiculos = [];
      for (let item of response) {
        if (item.modelo.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
          this.veiculos.push(item);
        }
      }
    }, erro => {
      console.log(erro.message);
    });

  }
}
