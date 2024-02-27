import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoProductosComponent } from './catalogo-productos.component';
import {SharedModule} from "../shared/shared.module";


const routes: Routes = [
  { path: '', component: CatalogoProductosComponent }
];

@NgModule({
  declarations: [
    CatalogoProductosComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class CatalogoProductosModule { }
