import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private _httpClient: HttpClient) { }
  authenticate(userLogin: UserLogin): Observable<User> {
  return this._httpClient.post<User>("http://localhost:5000/api/user/login", userLogin);
  }

  register(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>("http://localhost:5000/api/register", userLogin);
    }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
