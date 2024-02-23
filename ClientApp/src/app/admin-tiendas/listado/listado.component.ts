import { Component, OnInit } from '@angular/core';
import { TiendasService } from '../../shared/Services/tiendas.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listadoData: any[] = [];

  constructor(private tiendasService: TiendasService) {

  }

  ngOnInit() {
    this.getListado();
  }

  getListado(): void {
    this.listadoData = [];
    this.tiendasService.getAll().pipe(take(1)).subscribe({
      next: (response: any) => {
        if (response['code'] == 200) {
          this.listadoData = response['data'];
        }
      }
    });
  }
}
