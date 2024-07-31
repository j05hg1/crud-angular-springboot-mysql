import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Libro/listar/listar.component';
import { FormularioComponent } from './Libro/formulario/formulario.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'formulario', component:FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
