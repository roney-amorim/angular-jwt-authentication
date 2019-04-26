import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule, AutoCompleteModule, ButtonModule, CalendarModule, GrowlModule, MessageService, SelectButton } from "primeng/primeng";
import { TableModule } from 'primeng/table';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthInterceptor } from "./seguranca/auth-interceptor";
import { AuthGuard } from "./seguranca/auth.guard";
import { AuthService } from './seguranca/auth.service';



@NgModule({
  declarations: [
    HomeComponent,
    PaginaNaoEncontradaComponent,
    NavComponent,
    SelectButton,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    RouterModule,
    BrowserAnimationsModule,
    AccordionModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    AutoCompleteModule,
    GrowlModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavComponent,
    SelectButton,
    AutoCompleteModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    TableModule,
    ButtonModule,
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
