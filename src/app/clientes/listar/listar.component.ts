import { MessageService } from "primeng/primeng";
import { Cliente } from "./../../shared/models/model";
import { ClientesService } from "./../clientes.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes: Cliente[];
  cols: any[];
  constructor(private service: ClientesService, private message: MessageService) {
  }

  ngOnInit() {
    this.carregarClientes();
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'documento', header: 'Documento' }
    ];
  }

  carregarClientes() {

    this.service.consultar().subscribe(response => {
      this.clientes = response;
    }, erro => {
      this.message.add({ severity: 'error', summary: 'Erro ao carregar clientes', detail: erro.error });
    });
  }
  remove(documento: string){
    this.clientes = this.clientes.filter(cliente => {return cliente.documento !== documento});
  }
}
