import { Routes } from "@angular/router";
import {LayoutPageComponent} from "../Components/layout-page/layout-page.component";

export const routesadmin: Routes = [
  {
      path: 'articulos',
      loadChildren: () => import('../../admin-articulos/admin-articulos.module').then(m => m.AdminArticulosModule)
  },
  {
      path: 'tiendas',
      component: LayoutPageComponent,
      loadChildren: () => import('../../admin-tiendas/admin-tiendas.module').then(m => m.AdminTiendasModule)
  },
]
