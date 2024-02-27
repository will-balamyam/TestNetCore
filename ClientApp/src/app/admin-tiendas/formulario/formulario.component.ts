import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { TiendasService } from '../../shared/Services/tiendas.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formTienda: FormGroup = new FormGroup({
    id: new FormControl(),
    sucursal: new FormControl(),
    direccion: new FormControl()
  });

  constructor(private tiendasService: TiendasService,
              private route: ActivatedRoute,
              private router: Router,
              ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
          this.getById(+params['id']);
      }
    });
  }

  getById(id: number): void {
      this.tiendasService.getById(id).pipe(take(1)).subscribe({
          next: (response: any) => {
              if (response['code'] == 200) {
                  this.formTienda.get('id')?.patchValue(response['data'] ? response['data']['id'] : null, {emitEvent: false});
                  this.formTienda.get('sucursal')?.patchValue(response['data'] ? response['data']['sucursal'] : null, {emitEvent: false});
                  this.formTienda.get('direccion')?.patchValue(response['data'] ? response['data']['direccion'] : null, {emitEvent: false});
              }
          }
      });
  }
  saveData(): void {
    const bodyJson = this.formTienda.value;
    if (bodyJson['id']) {
      this.tiendasService.update(+bodyJson['id'], bodyJson).pipe(take(1)).subscribe({
          next: (response: any) => {
              if (response['code'] == 200) {
                this.redirectToList();
              }
          }
      });
    } else {
      this.tiendasService.save(bodyJson).pipe(take(1)).subscribe({
        next: (response: any) => {
          if (response['code'] == 200) {
            this.redirectToList();
          }
        }
      });
    }
  }

  redirectToList(): void {
    this.router.navigateByUrl(`/admin/tiendas`);
  }
}
