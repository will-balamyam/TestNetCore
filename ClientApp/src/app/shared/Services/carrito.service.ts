import { Injectable, Inject } from '@angular/core';
import {BehaviorSubject, Subject, take, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoCompraBehavior: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public carritoCompra$ = this.carritoCompraBehavior.asObservable();
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  setDataCarrito(data: any): void {
    let carritoDataString = JSON.stringify(data);
    localStorage.setItem('carritoCompra', carritoDataString);
    this.getDataCarritoEvent();
  }

  getDataCarrito(): any {
    let carritoData = localStorage.getItem('carritoCompra');
    if (carritoData) {
      carritoData = JSON.parse(carritoData);
    }
    return carritoData;
  }

  getDataCarritoEvent(): void {
    this.carritoCompraBehavior.next(this.getDataCarrito());
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'carrito/' + id);
  }
  saveCarrito(body: any): Observable<any> {
      return this.http.post<any>(this.baseUrl + 'carrito', body);
  }

  update(id: number, body: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'carrito/' + id, body);
  }

  saveCarritoItems(body: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'carrito/items', body);
  }

  deleteCarritoItems(carritoItemId: number, carritoId: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + 'carrito/items/' + carritoItemId + '/' + carritoId);
  }
}
