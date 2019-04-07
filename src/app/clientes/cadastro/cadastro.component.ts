import { catchError } from "rxjs/operators";
import { MessageService } from "primeng/primeng";
import { ClientesService } from "./../clientes.service";
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models/model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cliente: Cliente;
  constructor(private service: ClientesService, private message: MessageService) {
    this.consultar();
   }

  ngOnInit() {
  
  }
  consultar(){
    this.service.consultar().subscribe(
      resp => {
        this.cliente = resp[0];
      }, error => {
        this.message.add({severity: 'error', summary: 'Erro', detail: error.error});
      }
    );
  }

}
