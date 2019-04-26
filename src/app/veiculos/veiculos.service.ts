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
}
