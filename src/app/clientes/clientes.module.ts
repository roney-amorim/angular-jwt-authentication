import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarComponent } from './listar/listar.component';

import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [CadastroComponent, ListarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClientesRoutingModule,
    TableModule
  ],
  exports: [CadastroComponent, ListarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientesModule { }
