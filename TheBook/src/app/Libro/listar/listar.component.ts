import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/Models/Libro';

import { LibroService } from 'src/app/Servicios/libro.service';
import { MensajeService } from 'src/app/Servicios/mensaje.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  libros: Libro[];
  libroSelected: Libro | null = null; //pendiente por hacer
  
  constructor(
    private libroService:LibroService, 
    private mensajeService: MensajeService,
    private router:Router) { }

  ngOnInit(): void {
    this.getLibros("");
    this.libroService.buscarSuscriber$.subscribe((data: string) => {
      this.libroSelected = null;
      this.getLibros(data);
    });
  }

  getLibros(titulo: string): void {
    this.libroService.buscar(titulo).subscribe(
      (res)=>{
        this.libros=res;
      },
      (error)=>{
        this.mensajeService.agregarMensaje({
          texto: 'Error al cargar la lista.',
          tipo: 2
        });
      }
    );
  }

  crear(): void{
    this.mensajeService.agregarMensaje;
    this.libroSelected = {
      id: -1,
      titulo: '',
      autor: '',
      id_categoria: -1,
      categoria: {id:0, nombre: ''},
    };
  }

  seleccionar(libroSeleccionado: Libro): void{
    this.libroSelected = libroSeleccionado;
  }

}
