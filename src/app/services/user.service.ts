import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  
  getUserDashboardInfo(userId: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/${userId}/user`);
  }
}
