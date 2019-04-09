import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Cliente } from "src/app/shared/models/model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = environment.url;
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.BASE_URL.concat('/clientes'), cliente).pipe(map(json => { return json }));
  }
  buscarPorCodigo(codigo: number): Observable<Cliente> {
    return this.http.get<Cliente>(this.BASE_URL.concat(`/clientes/${codigo}`)).pipe(map(json => { return json }));
  }
  consultar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.BASE_URL.concat('/clientes')).pipe(map(json => { return json }));
  }
  alterar(cliente: Cliente): Observable<Cliente> {
    return this.http.patch<Cliente>(this.BASE_URL.concat('/clientes'), cliente).pipe(map(json => { return json }));
  }
  deletar(codigo: number): Observable<Cliente> {
    return this.http.delete<Cliente>(this.BASE_URL.concat(`/clientes/${codigo}`)).pipe(map(json => { return json }));
  }
}
