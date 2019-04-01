import { AuthInterceptor } from "./seguranca/auth-interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
// PrimeNG Dependencies
import { AccordionModule, ButtonModule, MessageService, PanelModule, RadioButtonModule } from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthGuard } from "./seguranca/auth.guard";
import { AuthService } from './seguranca/auth.service';



@NgModule({
  declarations: [
    HomeComponent,
    PaginaNaoEncontradaComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    ToastModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    NavComponent,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    ToastModule,
    HttpClientModule
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        MessageService,
        AuthGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ]
    }
  }
}
