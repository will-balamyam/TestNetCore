import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  login(body: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'clientes/login', body);
  }

  setUserData(body: any): void {
    sessionStorage.setItem('dataUser', JSON.stringify(body));
  }

  isLogged(): void {
    return !!sessionStorage.getItem('dataUser');
  }

  getUserData(): any {
    return JSON.parse(sessionStorage.getItem('dataUser'));
  }
}
