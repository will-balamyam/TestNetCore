import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminArticulosComponent } from './admin-articulos.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'add', component: FormularioComponent },
  { path: 'edit/:id', component: FormularioComponent}
];

@NgModule({
  declarations: [
    AdminArticulosComponent,
    ListadoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminArticulosModule { }
