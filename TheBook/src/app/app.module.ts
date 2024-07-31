import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Libro/listar/listar.component';
import { FormularioComponent } from './Libro/formulario/formulario.component';
import { MensajeComponent } from './Libro/mensaje/mensaje.component';
import { BusquedaComponent } from './Libro/busqueda/busqueda.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { LibroService } from './Servicios/libro.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    FormularioComponent,
    MensajeComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // LibroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
