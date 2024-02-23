import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminTiendasComponent } from './admin-tiendas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'add', component: FormularioComponent }
];

@NgModule({
  declarations: [
    AdminTiendasComponent,
    FormularioComponent,
    ListadoComponent    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminTiendasModule { }
