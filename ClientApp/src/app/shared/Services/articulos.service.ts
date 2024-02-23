import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    
  }


  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'articulos');
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'articulos/' + id);
  }

  save(body: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'articulos', body);
  }

  update(id: number, body: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'articulos/' + id, body);
  }
}
