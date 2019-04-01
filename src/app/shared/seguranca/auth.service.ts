import { JWTPayload } from './../models/model';
import { MessageService } from 'primeng/primeng';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/model';
import { tap, shareReplay, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';

import { environment } from './../../../environments/environment';

@Injectable()
export class AuthService {

  payload: JWTPayload;

  private apiRoot: any = environment;

  constructor(
    private http: HttpClient,
    private router: Router,
    private message: MessageService
  ) {}

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isLoggedin() {
    return this.loggedIn.asObservable();
  }


  // login(usario: Usuario) {
  //   if (usario.nome !== '' && usario.senha !== '' ) {
    //     this.router.navigate(['/']);
    //   } else{
      //     this.message.add({severity:'error', summary:'Erro', detail:'Usuário ou senha inválido!'});
  //   }
  // }
  
  // logout() {
  //   this.loggedIn.next(false);
  //   this.router.navigate(['/login']);
  // }
  
  private setSession(authResult) {
    const token = authResult.access_token;
    this.payload = jwtDecode(token) as JWTPayload;
    const expiresAt = moment.unix(this.payload.exp);
    console.log("Roney");
    console.log(expiresAt);

    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    this.loggedIn.next(true);
  }
  
  get token(): string {
    return localStorage.getItem('token');
  }

  login(usuario: Usuario): Observable<void> {
    const params = new HttpParams();
    params.append('Content-Type', 'application/json');
    const body = {username: usuario.nome, password: usuario.senha};

    return this.http.post<any>(
      this.apiRoot.url.concat('oauth/token'), body).pipe(map(response => {
        console.log(response);
        this.setSession(response);
      }), catchError((error) => {
        console.log(error);
        this.message.add({severity: 'error', summary: 'Erro', detail: error.message});
        return throwError(error.message);
      }));
    // return this.http.post(
    //   this.apiRoot.url.concat('oauth/token'),
    //   { username, password }
    //   ).pipe(
    //     tap(response => this.setSession(response)),
    //     shareReplay(),
    //   ).subscribe();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

  refreshToken() {
    if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
      return this.http.post(
        this.apiRoot.concat('refresh-token/'),
        { token: this.token }
      ).pipe(
        tap(response => this.setSession(response)),
        shareReplay(),
      ).subscribe();
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  hasPermission(role: string) {
    return this.payload && this.payload.authorities.includes(role);
  }
  hasAnyPermission(roles: string[]) {
    for (const role of roles) {
      if (this.hasPermission(role)) {
        return true;
      }
    }
  }

}
