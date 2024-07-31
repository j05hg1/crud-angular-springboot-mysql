import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Libro } from '../Models/Libro';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  
  private baseUrl = `${environment.apiUrl}/libro`;
  // private baseUrl = `${environment.apiUrl}`;
  private buscarObserver = new Subject<string>();
  public buscarSuscriber$ = this.buscarObserver.asObservable();

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }
 
  enviarBusqueda(data: string){
    this.buscarObserver.next(data);
  }

  buscar(titulo: string): Observable<Libro[]>{
    let url = titulo ? `${this.baseUrl}/buscar/${titulo}` : `${this.baseUrl}`;
    return this.http.get<Libro[]>(url);
    // return this.http.get<Libro[]>(`${this.baseUrl}/buscar/${titulo}`);
  }
  
  actualizar(libro: Libro): Observable<any>{
    return this.http.put<Libro>(this.baseUrl, libro, this.httpOptions);
  }

  agregar(libro: Libro): Observable<any>{
    return this.http.post<Libro>(this.baseUrl, libro, this.httpOptions);
  }

  eliminar(libro: Libro): Observable<any>{
    return this.http.delete<Libro>(`${this.baseUrl}/${libro.id}`, this.httpOptions);
  }
}
