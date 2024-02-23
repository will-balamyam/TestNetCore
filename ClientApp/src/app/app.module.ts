import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SharedModule } from './shared/shared.module';
import { LayoutPageComponent } from './shared/Components/layout-page/layout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      { path: 'admin-articulos', loadChildren: () => import('./admin-articulos/admin-articulos.module').then(m => m.AdminArticulosModule) },
      { path: 'admin-tiendas', component: LayoutPageComponent, loadChildren: () => import('./admin-tiendas/admin-tiendas.module').then(m => m.AdminTiendasModule) },
      { path: 'catalogo-productos', loadChildren: () => import('./catalogo-productos/catalogo-productos.module').then(m => m.CatalogoProductosModule) },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

