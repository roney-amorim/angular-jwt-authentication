import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/shared/models/model';
import { VeiculosService } from '../veiculos.service';
import { MessageService } from 'primeng/primeng';

@Component({
  selector: 'app-consulta-veiculo',
  templateUrl: './consulta-veiculo.component.html',
  styleUrls: ['./consulta-veiculo.component.css']
})
export class ConsultaVeiculoComponent implements OnInit {

  veiculos: Veiculo[];

  constructor(private service: VeiculosService, private message: MessageService) {
  }

  ngOnInit() {
    this.carregarVeiculos();
  }

  carregarVeiculos() {

    this.service.consultar().subscribe(response => {
      console.log(response);
      this.veiculos = response;
    }, erro => {
      this.message.add({ severity: 'error', summary: 'Erro ao carregar veículos', detail: erro.message });
    });
  }
  remove(codigo: number) {
    this.service.deletar(codigo).subscribe(response => {
      this.message.add({ severity: 'success', summary: 'Sucesso', detail: 'Veículo removido com sucesso.' });
      this.carregarVeiculos();
    }, erro => {
      this.message.add({ severity: 'error', summary: 'Erro ao carregar veículos', detail: erro.message });
    });
  }

}
