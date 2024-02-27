import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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

  isLogged(): boolean {
    return !!sessionStorage.getItem('dataUser');
  }

  getUserData(): any {
    let dataStorage = sessionStorage.getItem('dataUser');
    if (dataStorage) {
      return JSON.parse(dataStorage);
    }
    return null;
  }

  getUserId(): any {
    let dataUser = this.getUserData();
    return dataUser['id'];
  }
}
