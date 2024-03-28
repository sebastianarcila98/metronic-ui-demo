import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { UserLogin } from '../../models/auth.model';
import { User } from 'src/app/models/User';

const API_USERS_URL = `${environment.apiUrl}/auth`;

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private http: HttpClient) {}

  // public methods
  login(email: string, password: string): Observable<any> {
    return this.http.post<UserLogin>(`${environment.apiUrl}/account/login`, {
      email,
      password,
    });
  }

  // CREATE =>  POST: add a new user to the server
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/account/register`, user);
  }

  // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
  forgotPassword(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}/forgot-password`, {
      email,
    });
  }

  getUserByToken(token: string): Observable<User> {
    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<User>(`${environment.apiUrl}/account/getUserByToken`, {
      headers: httpHeaders,
    });
  }
}
