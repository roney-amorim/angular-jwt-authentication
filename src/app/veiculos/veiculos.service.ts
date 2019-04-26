import { Veiculo } from "./../shared/models/model";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = environment.url;
  }

  salvar(cliente: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.BASE_URL.concat('/veiculos'), cliente).pipe(map(json => { return json }));
  }
  buscarPorCodigo(codigo: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(this.BASE_URL.concat(`/veiculos/${codigo}`)).pipe(map(json => { return json }));
  }
  consultar(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.BASE_URL.concat('/veiculos')).pipe(map(json => { return json }));
  }
  alterar(cliente: Veiculo): Observable<Veiculo> {
    return this.http.patch<Veiculo>(this.BASE_URL.concat('/veiculos'), cliente).pipe(map(json => { return json }));
  }
  deletar(codigo: number): Observable<Veiculo> {
    return this.http.delete<Veiculo>(this.BASE_URL.concat(`/veiculos/${codigo}`)).pipe(map(json => { return json }));
  }
}
