import { ConsultaClientesComponent } from "./consulta-clientes/consulta-clientes.component";
import { CadastroClienteComponent } from "./cadastro-cliente/cadastro-cliente.component";
import { AuthGuard } from "./../shared/seguranca/auth.guard";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ConsultaClientesComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_CLIENTE_CONSULTAR'] }
  },
  {
    path: 'cadastrar', component: CadastroClienteComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_CLIENTE_CADASTRAR'] }
  },
  {
    path: 'cadastrar/:id', component: CadastroClienteComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_CLIENTE_EDITAR'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
