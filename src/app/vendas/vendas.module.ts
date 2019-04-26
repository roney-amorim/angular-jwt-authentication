import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { CalendarModule, AutoCompleteModule } from "primeng/primeng";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendasRoutingModule } from './vendas-routing.module';
import { ConsultaVendasComponent } from './consulta-vendas/consulta-vendas.component';
import { CadastroVendaComponent } from './cadastro-venda/cadastro-venda.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [ConsultaVendasComponent, CadastroVendaComponent],
  imports: [
    CommonModule,
    VendasRoutingModule,
    AutoCompleteModule,
    FormsModule,
    CalendarModule,
    TableModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class VendasModule { }
