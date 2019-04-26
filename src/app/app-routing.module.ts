import { AuthGuard } from "./shared/seguranca/auth.guard";
import { LoginComponent } from "./shared/login/login.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { PaginaNaoEncontradaComponent } from './shared/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'clientes', loadChildren: './clientes/clientes.module#ClientesModule', canActivate: [AuthGuard] },
  { path: 'veiculos', loadChildren: './veiculos/veiculos.module#VeiculosModule', canActivate: [AuthGuard] },
  { path: 'vendas', loadChildren: './vendas/vendas.module#VendasModule', canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
