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
  }

}
