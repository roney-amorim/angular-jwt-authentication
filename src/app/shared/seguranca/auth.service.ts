import { JWTPayload } from './../models/model';
import { MessageService } from 'primeng/primeng';
import { BehaviorSubject, throwError, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/model';
import { tap, shareReplay, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';

import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  payload: JWTPayload;

  private apiRoot: any = environment;
  private URL: string;

  constructor(
    private http: HttpClient,
    private message: MessageService,
    private router: Router
  ) {
    this.URL = this.apiRoot.url.concat('oauth/token');
    this.loadToken();
  }

  private setSession(authResult) {
    const token = authResult.access_token;
    this.payload = jwtDecode(token) as JWTPayload;
    const expiresAt = moment.unix(new Date(this.payload.exp).getTime());

    localStorage.setItem('token', authResult.access_token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  login(usuario: Usuario): Observable<void> {
    const body: any = { username: usuario.nome, password: usuario.senha, grant_type: 'password' };

    return this.http.post<any>(
      this.URL, body).pipe(map(response => {
        this.setSession(response);
      }), catchError((error) => {
        console.log(error);
        this.message.add({ severity: 'error', summary: 'Erro', detail: error.error });
        return throwError(error.message);
      }));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/login']);
  }

  refreshToken(): Observable<void> {
    if (moment().isBefore(this.getExpiration())) {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append("Authentication", localStorage.getItem('token'));

      const body = { grant_type: 'refresh_token' };

      return this.http.post<any>(
        this.apiRoot.url.concat('oauth/token'), body, { headers }).pipe(map(response => {
          this.setSession(response);
        }), catchError((error) => {
          console.log(error);
          this.message.add({ severity: 'error', summary: 'Erro', detail: error.message });
          return throwError(error.message);
        }));
    }
    return of();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
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
    return false;
  }
  loadToken() {
    const token = localStorage.getItem('token');
    this.payload = token !== null ? jwtDecode(localStorage.getItem('token')) as JWTPayload : undefined;
  }
}
