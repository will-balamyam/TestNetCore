import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminArticulosComponent } from './admin-articulos.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [
  { path: '', component: AdminArticulosComponent }
];

@NgModule({
  declarations: [
    AdminArticulosComponent,
    ListadoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminArticulosModule { }
