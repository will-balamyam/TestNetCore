import { Component, OnInit } from '@angular/core';
import {TiendasService} from "../../shared/Services/tiendas.service";
import {ArticulosService} from "../../shared/Services/articulos.service";
import { take } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  listadoData: any[] = [];

  constructor(private articulosService: ArticulosService) {

  }

  ngOnInit(): void {
    this.getListado();
  }

  getListado(): void {
    this.listadoData = [];
    this.articulosService.getAll().pipe(take(1)).subscribe({
      next: (response: any) => {
        if (response['code'] == 200) {
          this.listadoData = response['data'];
        }
      }
    });
  }
}
