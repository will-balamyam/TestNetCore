import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './Components/layout-page/layout-page.component';
import { CarritoCompraComponent } from './Components/carrito-compra/carrito-compra.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutPageComponent,
    CarritoCompraComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
    exports: [
        LayoutPageComponent,
        CarritoCompraComponent
    ]
})
export class SharedModule { }
