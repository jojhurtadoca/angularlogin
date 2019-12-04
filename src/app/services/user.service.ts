import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase = 'http://10.50.0.38/appcaribbsa/public/api/';

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(this.urlBase + 'auth/get-user');
  }
}
