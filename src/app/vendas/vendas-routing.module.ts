import { AuthGuard } from "./../shared/seguranca/auth.guard";
import { CadastroVendaComponent } from "./cadastro-venda/cadastro-venda.component";
import { ConsultaVendasComponent } from "./consulta-vendas/consulta-vendas.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  {
  path: '', component: ConsultaVendasComponent, canActivate: [AuthGuard],
  data: { roles: ['ROLE_VENDA_CONSULTAR'] }
},
{
  path: 'cadastrar', component: CadastroVendaComponent, canActivate: [AuthGuard],
  data: { roles: ['ROLE_VENDA_CADASTRAR'] }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
