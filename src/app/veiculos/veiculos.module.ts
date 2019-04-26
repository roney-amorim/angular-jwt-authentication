import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/primeng";
import { TableModule } from "primeng/table";
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { ConsultaVeiculoComponent } from './consulta-veiculo/consulta-veiculo.component';
import { VeiculosRoutingModule } from './veiculos-routing.module';


@NgModule({
  declarations: [CadastroVeiculoComponent, ConsultaVeiculoComponent],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    FormsModule,
    ButtonModule,
    TableModule
  ]
})
export class VeiculosModule { }
