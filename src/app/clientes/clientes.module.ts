import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [CadastroComponent, ListarComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  exports: [CadastroComponent, ListarComponent]
})
export class ClientesModule { }
