import { AuthInterceptor } from "./seguranca/auth-interceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
// PrimeNG Dependencies
import { RadioButtonModule, GrowlModule  } from 'primeng/primeng';
import { AccordionModule, ButtonModule, MessageService, PanelModule  } from 'primeng/primeng';
import {TableModule} from 'primeng/table';
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
    TableModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    GrowlModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    NavComponent,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    TableModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    GrowlModule,
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
