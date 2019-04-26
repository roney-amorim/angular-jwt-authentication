import { ActivatedRoute, Router } from "@angular/router";
import { Veiculo } from "src/app/shared/models/model";
import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { MessageService } from 'primeng/primeng';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css']
})
export class CadastroVeiculoComponent implements OnInit {

  veiculo: Veiculo = new Veiculo();;
  codigo: number;

  constructor(private service: VeiculosService, private route: ActivatedRoute, 
    private router: Router, private message: MessageService) {
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
        this.veiculo = resp;
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
    this.service.salvar(this.veiculo).subscribe(
      resp => {
        this.message.add({ severity: 'success', summary: 'Sucesso', detail: 'Veículo cadastrado com sucesso.' });
        this.router.navigate(['veiculos']);
      }, error => {
        console.log(error);
        this.message.add({ severity: 'error', summary: 'Erro', detail: error.message });
      }
    );
  }
  alterar() {
    this.service.alterar(this.veiculo).subscribe(
      resp => {
        this.message.add({ severity: 'success', summary: 'Sucesso', detail: 'Veículo alterado com sucesso.' });
        this.router.navigate(['veiculos']);
      }, error => {
        this.message.add({ severity: 'error', summary: 'Erro', detail: error.message });
      }
    );
  }



}
