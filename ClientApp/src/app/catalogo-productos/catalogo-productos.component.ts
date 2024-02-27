import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import {ArticulosService} from "../shared/Services/articulos.service";
import {CarritoService} from "../shared/Services/carrito.service";
import {SessionService} from "../shared/Services/session.service";

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit{
  listadoProductos: any[] = [];
  carrito: any = null;
  clienteId: any = 0;
  constructor(private articulosService: ArticulosService,
              private carritoService: CarritoService,
              private sessionService: SessionService) {
  }

  ngOnInit(): void {
      this.getListadoProductos();
      this.carritoService.carritoCompra$.subscribe({
          next: (dataCarrito: any) => {
              if (dataCarrito) {
                this.carrito = dataCarrito;
                console.log('Asignacion carito', this.carrito);
              }
          }
      });
      this.clienteId = this.sessionService.getUserId();
  }

  getListadoProductos(): void {
      this.articulosService.getAll().pipe(take(1)).subscribe({
          next: (response: any) => {
              if (response['code'] == 200) {
                  this.listadoProductos = response['data'];
              }
          }
      })
  }

  agregarItemCarrito(articulo: any): void {
      if (this.carrito) {
          if (this.carrito['carritoItems'] && this.carrito['carritoItems'].length > 0) {
            let itemFound = this.carrito['carritoItems'].find((item: any) => item['articuloId'] == articulo['id']);
            if (itemFound) {
              itemFound['cantidad'] = itemFound['cantidad'] ? (itemFound['cantidad'] += 1) : 1;
              itemFound['monto'] = +itemFound['cantidad'] * +articulo['precio'];
            } else {
              let addItem: any = {};
              addItem['cantidad'] = 1;
              addItem['monto'] = +articulo['precio'];
              addItem['articuloId'] = +articulo['id'];
              this.carrito['carritoItems'].push(addItem);
            }
            this.carrito['montoTotal'] = this.carrito['carritoItems'].reduce((total: number, producto: any) => {
              return total + +producto['monto'];
            }, 0);
          }
          this.carritoService.update(+this.carrito['id'], this.carrito).pipe(take(1)).subscribe({
              next: (response: any) => {
                  if (response['code'] == 200) {
                      this.carritoService.setDataCarrito(response['data']);
                  }
              }
          });
      } else {
          this.carrito = {};
          this.carrito['clienteId'] = this.clienteId;
          this.carrito['carritoItems'] = [];
          let addItem: any = {};
          addItem['cantidad'] = 1;
          addItem['monto'] = +articulo['precio'];
          addItem['articuloId'] = +articulo['id'];
          this.carrito['carritoItems'].push(addItem);
          this.carrito['montoTotal'] = this.carrito['carritoItems'].reduce((total: number, producto: any) => {
            return total + +producto['monto'];
          }, 0);
          this.carritoService.saveCarrito(this.carrito).pipe(take(1)).subscribe({
              next: (response: any) => {
                if (response['code'] == 200) {
                  this.carritoService.setDataCarrito(response['data']);
                }
              }
          })
      }
  }


}
