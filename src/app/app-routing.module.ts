import { AuthGuard } from "./shared/seguranca/auth.guard";
import { LoginComponent } from "./shared/login/login.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { PaginaNaoEncontradaComponent } from './shared/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path:'clientes', loadChildren:'./clientes/clientes.module#ClientesModule', canActivate: [AuthGuard],
  data:{ roles: ['ROLE_CLIENTE_CADASTRAR', 'ROLE_CLIENTE_EDITAR', 'ROLE_CLIENTE_CONSULTAR', 'ROLE_CLIENTE_EXCLUIR'] }},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
  data:{ roles: ['ROLE_CLIENTE_CADASTRAR'] }},

  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
