import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/Servicios/libro.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  tituloBuscar: string = '';

  constructor(private libroService: LibroService) { }

  ngOnInit(): void { }

  consultar(): void{
    this.libroService.enviarBusqueda(this.tituloBuscar);
  }

  limpiar(): void {
    this.tituloBuscar = '';
    this.libroService.enviarBusqueda("");
  }

}
