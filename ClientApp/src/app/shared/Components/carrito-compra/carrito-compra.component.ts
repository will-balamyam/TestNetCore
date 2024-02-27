import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import {ArticulosService} from "../../Services/articulos.service";
import {CarritoService} from "../../Services/carrito.service";
import {SessionService} from "../../Services/session.service";

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit{
  carrito: any = null;
  constructor(private articulosService: ArticulosService,
              private carritoService: CarritoService,
              private sessionService: SessionService) {
    this.carritoService.getDataCarritoEvent();
  }

  ngOnInit(): void {
    this.carritoService.carritoCompra$.subscribe({
      next: (dataCarrito: any) => {
        if (dataCarrito) {
          this.carrito = dataCarrito;
        }
      }
    });
  }

  modificarCantidad(item: any, aumentar: boolean = false) {
      if (aumentar) {
        item['catidad'] += 1
      } else {
        item['catidad'] -= 1
      }

      this.carritoService.update(this.carrito['id'], this.carrito).pipe(take(1)).subscribe({
          next: (response: any) => {
              if (response['code'] == 200) {
                  this.carritoService.setDataCarrito(response['data']);
              }
          }
      })
  }

  eliminarItem(item: any) {
    this.carritoService.deleteCarritoItems(item['id'], this.carrito['id']).pipe(take(1)).subscribe({
        next: (response: any) => {
          if (response['code'] == 200) {
            this.carritoService.setDataCarrito(response['data']);
          }
        }
    })
  }
}
