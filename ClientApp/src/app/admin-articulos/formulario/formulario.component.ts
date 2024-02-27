import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { TiendasService } from '../../shared/Services/tiendas.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ArticulosService} from "../../shared/Services/articulos.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formArticulo: FormGroup = new FormGroup({
    id: new FormControl(),
    codigo: new FormControl(),
    descripcion: new FormControl(),
    precio: new FormControl(),
    imagen: new FormControl(),
    stock: new FormControl(),
    tiendaId: new FormControl()
  });

  listTiendas: any[] = [];

  constructor(private tiendasService: TiendasService,
              private articulosService: ArticulosService,
              private route: ActivatedRoute,
              private router: Router,
  ) {
    this.getListTiendas();
  }

  ngOnInit(): void  {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getById(+params['id']);
      }
    });
  }

  getListTiendas(): void {
    this.listTiendas = [];
    this.tiendasService.getAll().pipe(take(1)).subscribe({
        next: (response: any) => {
          if (response['code'] == 200) {
            this.listTiendas = response['data'];
          }
        }
    });
  }

  getById(id: number): void {
    this.articulosService.getById(id).pipe(take(1)).subscribe({
      next: (response: any) => {
        if (response['code'] == 200) {
          this.formArticulo.get('id')?.patchValue(response['data'] ? response['data']['id'] : null, {emitEvent: false});
          this.formArticulo.get('codigo')?.patchValue(response['data'] ? response['data']['codigo'] : null, {emitEvent: false});
          this.formArticulo.get('descripcion')?.patchValue(response['data'] ? response['data']['descripcion'] : null, {emitEvent: false});
          this.formArticulo.get('precio')?.patchValue(response['data'] ? response['data']['precio'] : null, {emitEvent: false});
          this.formArticulo.get('imagen')?.patchValue(response['data'] ? response['data']['imagen'] : null, {emitEvent: false});
          this.formArticulo.get('stock')?.patchValue(response['data'] ? response['data']['stock'] : null, {emitEvent: false});
          this.formArticulo.get('tiendaId')?.patchValue(response['data'] ? response['data']['tiendaId'] : null, {emitEvent: false});
        }
      }
    });
  }
  saveData(): void {
    const bodyJson = this.formArticulo.value;
    if (bodyJson['id']) {
      this.articulosService.update(+bodyJson['id'], bodyJson).pipe(take(1)).subscribe({
        next: (response: any) => {
          if (response['code'] == 200) {
            this.redirectToList();
          }
        }
      });
    } else {
      this.articulosService.save(bodyJson).pipe(take(1)).subscribe({
        next: (response: any) => {
          if (response['code'] == 200) {
            this.redirectToList();
          }
        }
      });
    }
  }


  redirectToList(): void {
    this.router.navigateByUrl(`/admin/articulos`);
  }
}
