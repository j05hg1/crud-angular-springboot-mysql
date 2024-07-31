import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../Models/Categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  consultarCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${environment.apiUrl}/categoria`);
    // return this.http.get<Categoria[]>(`${environment.apiUrl}`);
  }
}
