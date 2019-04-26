import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Venda, Veiculo, Cliente } from "./../shared/models/model";

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = environment.url;
  }

  consultar(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.BASE_URL.concat('/vendas')).pipe(map(json => { return json }));
  }
  salvar(venda: Venda): Observable<Venda> {
    return this.http.post<Venda>(this.BASE_URL.concat('/vendas'), venda).pipe(map(json => { return json }));
  }
  deletar(codigo: number): Observable<Venda> {
    return this.http.delete<Venda>(this.BASE_URL.concat(`/vendas/${codigo}`)).pipe(map(json => { return json }));
  }
  filtrarClientes() {
    return this.http.get<Cliente[]>(this.BASE_URL.concat('/clientes')).pipe(map(json => { return json }));
  }
  filtrarVeiculos() {
    return this.http.get<Veiculo[]>(this.BASE_URL.concat('/veiculos')).pipe(map(json => { return json }));
  }
}