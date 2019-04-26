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
  }

}
