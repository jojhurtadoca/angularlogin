import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlBase = 'http://10.50.0.38/appcaribbsa/public/api/';

  constructor(private http: HttpClient){}

  login(data: object): Observable<any>{
    return this.http.post(this.urlBase + 'auth/login', data);
  }


  signup(data: object): Observable<any> {
    return this.http.post(this.urlBase + 'auth/signup', data);
  }
}
