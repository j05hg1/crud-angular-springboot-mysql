import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Models/Categoria';
import { Libro } from 'src/app/Models/Libro';
import { CategoriaService } from 'src/app/Servicios/categoria.service';
import { LibroService } from 'src/app/Servicios/libro.service';
import { MensajeService } from 'src/app/Servicios/mensaje.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() libroSelected?: Libro;
  categorias: Categoria[];

  constructor(
    private libroService: LibroService,
    private categoriaService: CategoriaService,
    private mensajeService: MensajeService
  ) { }

  ngOnInit(): void {
    this.categoriaService.consultarCategorias().subscribe((categorias)=>{
      this.categorias = categorias;
    });
  }

  guardar(libro: Libro): void{
    this.libroService.agregar(libro).subscribe(
      (res) => {
        this.mensajeService.agregarMensaje({
          texto: `Libro ${libro.titulo} guardado.`,
          tipo: 1,
        });
        this.cerrarFormulario();
      },
      (error) => {
        this.mensajeService.agregarMensaje({
          texto: `Error al guardar el libro. Intente nuevamente`,
          tipo: 2,
          });
      }
    )
  }

  editar(libro: Libro): void{
    this.libroService.actualizar(libro).subscribe(
      (res) => {
        this.mensajeService.agregarMensaje({
          texto: `Libro ${libro.titulo} actualizado.`,
          tipo: 1,
      });
        this.cerrarFormulario();
      },
      (error) => {
        this.mensajeService.agregarMensaje({
          texto: `Error al actualizar el libro. Intente nuevamente`,
          tipo: 2,
        });
      }
    );
  }

  eliminar(): void{
    if (this.libroSelected){    
      let titulo = this.libroSelected.titulo;
      this.libroService.eliminar(this.libroSelected).subscribe(
        (res) => {
          this.mensajeService.agregarMensaje({
            texto: `Libro ${titulo} eliminado.`,
            tipo: 1,
          });
            this.cerrarFormulario();
        },
        (error) => {
          this.mensajeService.agregarMensaje({
            texto: `Error al eliminar el libro. Intente nuevamente`,
            tipo: 2,
          });
        }
      ); 
    }         
  }

  private cerrarFormulario(): void{
    this.libroService.enviarBusqueda("");
    this.libroSelected = undefined;
  }

}
