import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendasService {
  private baseUrl: string = '';
  constructor(private http: HttpClient, @Inject('BASE_URL') _baseUrl: string) {
    this.baseUrl = _baseUrl;
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'tiendas');
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'tiendas/' + id);
  }

  save(body: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'tiendas', body);
  }

  update(id: number, body: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'tiendas/' + id, body);
  }
}
