import { AuthGuard } from "./../shared/seguranca/auth.guard";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {path:'', component: ListarComponent, canActivate: [AuthGuard], 
  data:{ roles: ['ROLE_CLIENTE_CONSULTAR'] }},
  {path:'cadastrar', component: CadastroComponent, canActivate: [AuthGuard],
  data:{ roles: ['ROLE_CLIENTE_CADASTRAR'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
