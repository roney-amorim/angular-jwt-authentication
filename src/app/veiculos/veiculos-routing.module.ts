import { AuthGuard } from "./../shared/seguranca/auth.guard";
import { CadastroVeiculoComponent } from "./cadastro-veiculo/cadastro-veiculo.component";
import { ConsultaVeiculoComponent } from "./consulta-veiculo/consulta-veiculo.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ConsultaVeiculoComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_VEICULO_CONSULTAR'] }
  },
  {
    path: 'cadastrar', component: CadastroVeiculoComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_VEICULO_CADASTRAR'] }
  },
  {
    path: 'cadastrar/:id', component: CadastroVeiculoComponent, canActivate: [AuthGuard],
    data: { roles: ['ROLE_VEICULO_EDITAR'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
