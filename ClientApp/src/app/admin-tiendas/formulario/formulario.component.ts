import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { TiendasService } from '../../shared/Services/tiendas.service';


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

  constructor(private tiendasService: TiendasService) {

  }

  ngOnInit() {

  }

  saveData(): void {
    const bodyJson = this.formTienda.value;
    this.tiendasService.save(bodyJson).pipe(take(1)).subscribe({
      next: (response: any) => {

      }
    })
  }
}
