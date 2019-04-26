import { catchError } from "rxjs/operators";
import { MessageService } from "primeng/primeng";
import { ClientesService } from "../clientes.service";
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models/model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  codigo: number;
  dataNascimento: Date;

  constructor(private service: ClientesService, private route: ActivatedRoute, private router: Router, private message: MessageService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.codigo = params['id'];
      if (this.codigo !== undefined && this.codigo !== null) {
        this.consultar();
      }
    });

  }

  consultar() {
    this.service.buscarPorCodigo(this.codigo).subscribe(
      resp => {
        this.dataNascimento = new Date(resp.dataNascimento);
        this.dataNascimento.setDate(this.dataNascimento.getDate() + 1);
        this.cliente = resp;
      }, error => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: error.error });
      }
    );
  }

  salvar() {
    if (this.codigo !== undefined && this.codigo !== null) {
      this.alterar();
    } else {
      this.incluir();
    }
  }

  incluir() {
    this.dateToString();
    this.service.salvar(this.cliente).subscribe(
      resp => {
        this.message.add({ severity: 'success', summary: 'Sucesso', detail: 'Cliente cadastrado com sucesso.' });
        this.router.navigate(['clientes']);
      }, error => {
        console.log(error);
        this.message.add({ severity: 'error', summary: 'Erro', detail: error.message });
      }
    );
  }
  alterar() {
    this.dateToString();
    this.service.alterar(this.cliente).subscribe(
      resp => {
        this.message.add({ severity: 'success', summary: 'Sucesso', detail: 'Cliente alterado com sucesso.' });
        this.router.navigate(['clientes']);
      }, error => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: error.message });
      }
    );
  }

  dateToString() {
    this.cliente.dataNascimento = this.dataNascimento.toISOString().substring(0,10);
  }
}
