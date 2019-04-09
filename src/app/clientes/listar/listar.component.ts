import { MessageService } from "primeng/primeng";
import { Cliente } from "./../../shared/models/model";
import { ClientesService } from "./../clientes.service";
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes: Cliente[];
 
  constructor(private service: ClientesService, private message: MessageService, private router:Router) {
  }

  ngOnInit() {
    this.carregarClientes();
  }

  carregarClientes() {

    this.service.consultar().subscribe(response => {
      console.log(response);
      this.clientes = response;
    }, erro => {
      this.message.add({ severity: 'error', summary: 'Erro ao carregar clientes', detail: erro.message });
    });
  }
  remove(codigo: number){
    this.service.deletar(codigo).subscribe(response => {
      this.message.add({ severity: 'success', summary: 'Sucesso', detail: 'Cliente removido com sucesso.' });
      this.carregarClientes();
    }, erro => {
      this.message.add({ severity: 'error', summary: 'Erro ao carregar clientes', detail: erro.message });
    });
  }
}
