import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  getUserDashboardInfo(userId: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/${userId}/user`);
  }

  updateUser(user: User) {
    console.log('USER: ', user);
    this.userSubject.next(user);
  }
}
