import { Injectable } from '@angular/core';
import { Mensaje } from '../Models/Mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  mensaje: Mensaje;

  constructor() { }

  agregarMensaje(mensaje: Mensaje){
    this.mensaje = mensaje;
  }
}
