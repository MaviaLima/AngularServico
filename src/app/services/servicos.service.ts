import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servico } from '../models/servico';
const servicosApiUrl = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {

    constructor(private http: HttpClient) { }
  getListaServicos():Observable<Servico[]>{
    const url = servicosApiUrl + '/rest/servicos';
    return this.http.get<Servico[]>(url);
  }


}
