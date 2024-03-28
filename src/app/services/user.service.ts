import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserLogin } from '../modules/auth/models/auth.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  public get currentUserValue(): User | null{
		return this.userSubject.value;
	}

  getUserDashboardInfo(userId: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiUrl}/${userId}/user`);
  }

  updateUser(user: User) {
    console.log('USER: ', user);
    this.userSubject.next(user);
  }


  // helper methods
  public getAuthFromLocalStorage(): UserLogin | undefined {
    try {
      const lsValue = localStorage.getItem(this.authLocalStorageToken);
      if (!lsValue) {
        return undefined;
      }

      const authData = JSON.parse(lsValue);
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}
