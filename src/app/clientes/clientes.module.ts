import { CalendarModule } from "primeng/primeng";
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [CadastroClienteComponent, ConsultaClientesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClientesRoutingModule,
    CalendarModule,
    TableModule
  ],
  exports: [
    CadastroClienteComponent,
    ConsultaClientesComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class ClientesModule { }
