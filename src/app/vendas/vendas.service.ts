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

  filtrarClientes() {
    return this.http.get<Cliente[]>(this.BASE_URL.concat('/clientes')).pipe(map(json => { return json }));
  }
  filtrarVeiculos() {
    return this.http.get<Veiculo[]>(this.BASE_URL.concat('/veiculos')).pipe(map(json => { return json }));
  }
}