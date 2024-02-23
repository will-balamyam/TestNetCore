import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoProductosComponent } from './catalogo-productos.component';


const routes: Routes = [
  { path: '', component: CatalogoProductosComponent }
];

@NgModule({
  declarations: [
    CatalogoProductosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CatalogoProductosModule { }
